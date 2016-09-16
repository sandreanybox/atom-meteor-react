{$} = require 'space-pen'
fs = require("fs-extra")
fsPath = require("path")
Config = require("./configHandler")
{requirePackages} = require 'atom-utils'
AddDialog = null

module.exports =
class DirectoryHandler
  @selectedElement: null
  @treeElement: null

  constructor: (name, parent, path, template, childTemplates, callback, dialogOptions) ->
    self = this
    @name = name
    @template = template
    @childTemplates = childTemplates
    @path = path
    @callback = callback
    @dialogOptions = dialogOptions

    # check and create directory
    DirectoryHandler.checkCreateDirectory(path)

    func = null
    if (template)
      func = @create.bind(this, template, name, path)

    @container = DirectoryHandler.createList(name, parent, func)

    dir = atom.project.resolvePath(path)
    unless fs.existsSync(dir)
      atom.notifications.addWarning("This is not a Mantra project, " + path + " directory missing!")

    @methodDir = atom.project.getDirectories()[0].getSubdirectory(path)
    @methodDir.onDidChange(() ->
      self.load()
    )

    @load()

    # init treeView
    DirectoryHandler.treeView()

  load: () ->
    @clear(@container)
    @loadDirectory(@methodDir, @container)

    # debugger
    #
    # $(@container).on 'click', '.list-item[is=tree-view-file]', (e) ->
    #   DirectoryHandler.revealActiveFile(e)
    #   e.stopPropagation()
    #
    #   atom.workspace.open(this.file.path)
    #   this.getPath = () -> return this.file.path # TODO: Check other options
    #   DirectoryHandler.select(this)
    #
    #   return false
    #
    # $(@container).on 'contextmenu', '.list-item[is=tree-view-file]', (e) ->
    #   atom.workspace.open(this.file.path)
    #   DirectoryHandler.select(this)
    #   DirectoryHandler.revealActiveFile(e)

      #e.stopPropagation()
      #e.preventDefault()

  @treeView: () ->
    if (DirectoryHandler.treeElement == null)
      requirePackages('tree-view').then ([treeView]) =>
        DirectoryHandler.treeElement = treeView.treeView.element
    return DirectoryHandler.treeElement

  @revealActiveFile: (e) ->
    activeFilePath = e.currentTarget.file.path

    [rootPath, relativePath] = atom.project.relativizePath(activeFilePath)
    return unless rootPath?

    activePathComponents = relativePath.split(fsPath.sep)
    currentPath = rootPath

    for pathComponent in activePathComponents
      currentPath += fsPath.sep + pathComponent
      entry = DirectoryHandler.entryForPath(currentPath)
      if entry && entry.expand
        entry.expand()

  @entryForPath: (entryPath) ->
    bestMatchEntry = null
    bestMatchLength = 0

    for entry in DirectoryHandler.treeView().querySelectorAll('.entry')
      if entry.isPathEqual(entryPath)
        return entry

      entryLength = entry.getPath().length
      if entry.directory?.contains(entryPath) and entryLength > bestMatchLength
        bestMatchEntry = entry
        bestMatchLength = entryLength

  loadDirectory: (dir, container) ->
    files = dir.getEntriesSync()

    for file in files
      if (file.isFile())
        if file.getBaseName()[0] == "."
          continue
        DirectoryHandler.addFile(container, file)
      if (file.isDirectory())
        name = file.getBaseName()
        [rootProjectPath, relativeDirectoryPath] = atom.project.relativizePath(file.path)

        new DirectoryHandler(name, container, relativeDirectoryPath)

  create: (template, name, path) ->
    path = atom.project.resolvePath(path)

    AddDialog ?= require './add-module-dialog'

    lang = Config.get("language")

    # this reloads the template if it was changed
    template = Config.template template.name

    dialog = new AddDialog(path,
      @template,
      name.toLowerCase(),
      @dialogOptions)

    self = this
    # when we have added file process all actios
    dialog.on "module-created", (event, newPath) ->
      DirectoryHandler.executeActions(newPath, template)
      #dialog.on "module-created", @load

    dialog.attach()

    return false

  clear: (elem) ->
    while (elem.firstChild)
      elem.removeChild(elem.firstChild)

  @executeActions: (newPath, template) ->
    name = fsPath.basename(newPath)
    pname = name.split('.')[0] # filename without extension
    dir = fsPath.dirname(newPath)

    if template.actions
      for action in template.actions
        aPath = action.path.replace /\$name/g, pname
        aPath = fsPath.join dir, aPath
        orig_dname = fsPath.dirname(newPath)
        new_dname = fsPath.dirname(aPath)

        if action.type == 'create'
          # check directory
          DirectoryHandler.checkCreateDirectory(new_dname)
          # create template text
          newTemplate = action.text.replace /\$name/g, pname
          DirectoryHandler.checkCreateFile(aPath, newTemplate)
        if action.type == 'replace'
          text = action.replace.replace /\$name/g, pname
          text = text.replace /\\n/g, '\n'
          # replace in file
          DirectoryHandler.replaceInFile(aPath, action.what, text)
    #dialog.on "module-created", @load

  @checkCreateDirectory: (dir) ->
    dirPath = DirectoryHandler.resolvePath(dir, true)

    unless fs.existsSync dirPath
      fs.ensureDirSync dirPath
      atom.notifications.addInfo "Mantra directory created: " + dir

  @checkCreateFile: (file, text) ->
    unless fs.existsSync file
      atom.notifications.addInfo "Creating: " + file
      fs.writeFile(file, text, 'utf8', (err) ->
        if err
          atom.notifications.addError err.message
      )

  @resolveName: (path) ->
    if (path.indexOf("$lang") >= 0)
      lang = Config.get("language")
      return path.replace(/\$lang/g, lang)
    return path
  @resolvePath: (path, absolute, addRoot) ->


    path = DirectoryHandler.resolveName(path)

    if (addRoot)
      path = fsPath.join Config.get("root"), path

    if absolute
      return atom.project.resolvePath(path)
    else return path

  @select: (elem) ->
    if elem == DirectoryHandler.selectedElement
      return

    if DirectoryHandler.selectedElement
      DirectoryHandler.selectedElement?.classList.remove 'mselected'

    DirectoryHandler.selectedElement = elem
    DirectoryHandler.selectedElement.classList.add 'selected'
    DirectoryHandler.selectedElement.classList.add 'mselected'

  @replaceInFile: (path, what, repl) ->
    data = fs.readFileSync(path, 'utf8')

    # for i in [0...replacements.length/2]
    #   data = data.replace(replacements[i*2], replacements[i*2+1])
    data = data.replace(what, repl.trim() + "\n")

    fs.writeFileSync(path, data, 'utf8')


  @addFile: (parent, file) ->
    name = fsPath.basename(file.path)
    listItem = document.createElement('li')
    listItem.classList.add('file', 'list-item')
    listItem.setAttribute('is', 'tree-view-file')
    listItem.file = file
    listItemName = document.createElement('span')
    listItemName.innerText = file.getBaseName()
    listItemName.classList.add('name', 'icon', 'icon-file-text')
    listItemName.setAttribute('data-path', file.path)
    listItemName.setAttribute('data-name', name)
    listItem.appendChild listItemName

    parent.appendChild listItem

  @createList: (headerText, parent, func) ->
    client = document.createElement('li')

    # header

    if headerText
      clientHeader = document.createElement('div')
      clientHeader.classList.add('header', 'list-item')

      clientSpan = document.createElement('span')
      clientSpan.innerText = headerText
      clientSpan.classList.add('name', 'icon', 'icon-file-directory')

      clientHeader.appendChild clientSpan
      client.appendChild clientHeader

      #tests are collapsed, everything else is expanded
      if headerText == "tests" || headerText == "stories"
        client.classList.add('mantra', 'list-nested-item', 'collapsed')
      else
        client.classList.add('mantra', 'list-nested-item', 'expanded')

      if func
        button = document.createElement('button')
        button.classList.add('pull-right', 'mantra', 'addButton')

        buttonSpan = document.createElement('div')
        buttonSpan.innerText = "NEW"
        buttonSpan.classList.add('mantra', 'addText')

        button.appendChild(buttonSpan)
        button.onclick = (e) ->
          e.stopPropagation()
          e.preventDefault()
          return func()


        clientHeader.appendChild button


    clientList = document.createElement('ol')
    clientList.classList.add('entries', 'list-tree')

    client.appendChild clientList

    parent.appendChild client

    $(clientHeader).on 'click', ->
      nested = $(this).closest('.list-nested-item')
      nested.toggleClass('expanded')
      nested.toggleClass('collapsed')

    $(clientHeader).on 'contextmenu', (e) ->
      e.stopPropagation()
      e.preventDefault()

    return clientList
