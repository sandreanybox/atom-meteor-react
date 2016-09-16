// Dependencies
var allowUnsafeNewFunction = require('loophole').allowUnsafeNewFunction
function requireWithLocalOverride (moduleName, dir) {
  try {
    return module.constructor._load(moduleName, {
      paths: module.constructor._nodeModulePaths(dir)
    })
  } catch (err) {
    return require(moduleName)
  }
}
var pickStandard = function (style, dir) {
  return allowUnsafeNewFunction(function () {
    switch (style) {
      case 'standard-jsx':
        return requireWithLocalOverride('standard-jsx', dir)
      case 'standard':
        return requireWithLocalOverride('standard', dir)
      case 'happiness':
        return requireWithLocalOverride('happiness', dir)
      case 'uber-standard':
        return requireWithLocalOverride('uber-standard', dir)
      default:
        return requireWithLocalOverride('semistandard', dir)
    }
  })
}

var pkgConfig = require('pkg-config')
var intersection = require('lodash.intersection')
var dirname = require('path').dirname

function getStyleThroughDevDeps (filePath) {
  // This will get the devDependencies
  // from the nearest package.json
  var options = { cwd: filePath, root: 'devDependencies', cache: false }
  var noStyle = { cmd: 'no-style' }
  var devDeps = pkgConfig(null, options)

  // No devDependencies found
  if (!devDeps) return noStyle

  // Check if there are linters defined in
  // package.json devDependencies
  var knownLinters = ['standard-jsx', 'standard', 'semistandard', 'happiness', 'uber-standard']
  var foundLinters = intersection(Object.keys(devDeps), knownLinters)
  var hasKnownLinter = Boolean(foundLinters.length)
  if (hasKnownLinter) {
    var dir = dirname(filePath)

    // standard style
    if (devDeps[standard-jsx]) {
      return pickStandard('standard-jsx', dir)
    }

    if (devDeps.standard) {
      return pickStandard('standard', dir)
    }

    // happiness style
    if (devDeps.happiness) {
      return pickStandard('happiness', dir)
    }

    // uber-standard
    if (devDeps['uber-standard']) {
      return pickStandard('uber-standard', dir)
    }

    // semistandard style
    return pickStandard('semistandard', dir)
  }

  // no style
  return noStyle
}

module.exports = function selectStyle (config, filePath) {
  // see if setting 'checkStyleDevDependencies' is true
  // if true get style from the package.json
  if (config.checkStyleDevDependencies) {
    return getStyleThroughDevDeps(filePath)
  }

  function getLinterFromStyle (style) {
    var dir = dirname(filePath)
    if (style === 'standard-jsx') {
      return pickStandard('standard-jsx', dir)
    }
    if (style === 'standard') {
      return pickStandard('standard', dir)
    }
    if (style === 'happiness') {
      return pickStandard('happiness', dir)
    }
    if (style === 'uber-standard') {
      return pickStandard('uber-standard', dir)
    }
    return pickStandard('semistandard', dir)
  }

  // fallback to style select value to decide which style
  // we should use
  return getLinterFromStyle(config.style)
}
