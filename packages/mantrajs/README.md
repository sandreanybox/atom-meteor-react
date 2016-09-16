# Mantra extensions for Meteor developers

## Quickstart

1. Install plugin in Atom
2. Set your project type in the plugin preferences page (Javascript/Typescript/Redux/Apollo)
3. Start the plugin with "ctrl+alt+o"
4. If you are starting with a fresh project let plugin create all files for you
5. KNOWN ISSUE: When you let plugin create all files for you you need to toggle it once more, otherwise this step is not necessary

**IMPORTANT:** Currently works only with the default theme (e.g. Material design theme not supported)
**IMPORTANT:** Previous CSON configuration needs to be rewritten in YAML

## Functionality:

- custom pane to display Mantra modules and components
- automatically generate a module
- automatically generate module components from the menu
- **NEW: automatically generate tests and stories**
- **NEW: support for various project types**
- generate server components
- several snippets for mantra components ()
- init a new mantra app automatically
- **NEW: easy definition of any mantra component via YAML**


1. Code generation - It is possible now to modify the generated code based on placeholders (*here I would like feedback on possible template structure and placeholders*). Also, please not, how components are automatically registered inside index.js

  ![components](https://cloud.githubusercontent.com/assets/2682705/12999539/9f73196c-d1a4-11e5-9a49-8d898d40904e.gif)

2. Similar functionality for modifying placeholders works for module components

  ![modulecomponents](https://cloud.githubusercontent.com/assets/2682705/12999551/b5078e8e-d1a4-11e5-8187-520b4337a94b.gif)

3. When new module is created it automatically creates all necessary directories and register module in `main.js` of the mantra app

  ![modulenew](https://cloud.githubusercontent.com/assets/2682705/12999570/e1bd8050-d1a4-11e5-9bad-0c497e632d76.gif)

4. It is possible to initialise all directories and mantra files in the empty Meteor project just by toggling the mantra plugin

  ![lazyinit](https://cloud.githubusercontent.com/assets/2682705/12999580/f4a0b930-d1a4-11e5-922a-9411fc374425.gif)

5. Mantra plugin settings are kept in the mantra.json file

6. Context menu was disabled in mantra pane, as this led to problems with file deletion, which often led to unexpected deletes.

## Configuration:

Plugin can be easily customised by creating a *mantra.yaml* file in the project root. In the configuration, you first define the structure of the panes that will be displayed, then you define following parameters:

1. For each directory you can define a template file with placeholders that will be created when pressing the "NEW" button on the directory
2. For each file you define the default content in the template
3. Files can be nested in the directories

For each template you define following parameters:

1. *name* - name of the template
2. *text* - text of the templete. You can use $1, $2 for the placeholders
3. *placeholders* - array of placeholders that replce $1, $2 from above
4. *create* - file is created by default when it does not exist
5. *show* - shows in the pane view. If this file is part of the already visible directory this has no effect
6. *actions* - define triggers when the file is created. This can either be *create* or *replace*. Create action creates extra files. Replace action replaces content in existing files.

Checkout extra configuration in the project repository. Following is an exemplary configuration for the "Classic Mantra Javascript" project.

```yaml
root: ''
panes:
  - name: Module
    structure:
      - directory: actions
        structure:
          - file: index.ts
            template: actionIndex
      - directory: components
        structure:
          - file: stories/index.ts
            template: storiesIndex
      - directory: containers
      - file: routes.tsx
        template: route
      - file: index.ts
        template: module
  - name: Server
    structure:
      - directory: server/publications
        structure:
          - file: index.ts
            template: publicationIndex
      - directory: server/methods
        structure:
          - file: index.ts
            template: methodIndex
      - file: server/index.ts
        template: server
  - name: Configs
    structure:
      - directory: client/configs
      - directory: lib
      - file: client/configs/context.ts
        template: context
      - file: client/index.ts
        template: client

templates:
  # Module action template
  - name: actions
    text: |
      class Actions {
        create({Meteor, LocalState}, myParam) {
        },
      };
      let actions = new Actions();
      export default actions;
    placeholders:
    actions:
      - type: replace
        path: index.ts
        what: const actions = {
        replace: import $name from "./$name";\nconst actions = {
      - type: replace
        path: index.ts
        what: const actions = {
        replace: const actions = {\n $name,
      - type: create
        path: tests/$name_test.ts
        text: |
          const {describe, it} = global;
          import {expect} from 'chai';
          import {spy, stub} from 'sinon';
          import actions from '../posts';

          describe('module.actions.actionSet', () => {
            describe('create', () => {
              it('should reject if title is not there', () => {
                const LocalState = {set: spy()};
                actions.create({LocalState}, null, 'content');
                const args = LocalState.set.args[0];

                expect(args[0]).to.be.equal('SAVING_ERROR');
                expect(args[1]).to.match(/required/);
              });
            });
          });
  - name: actionIndex
    create: true
    text: |
      const actions = {
        // ACTION
      };
      export default actions;
  # Module component template
  - name: storiesIndex
    create: true
    text: |
      // imports
  - name: components
    text: |
      import React from "react";

      interface IProps {
      }

      export default class $1 extends React.Component {
        render() {
          return (
            <div></div>
          );
        }
      }
    placeholders:
      - Component Name
    actions:
      - type: create
        path: tests/$name_test.ts
        text: |
          const {describe, it} = global;
          import {expect} from 'chai';
          import {shallow} from 'enzyme';
          import Component from '../$name';

          describe('test', () => {
            it('should display the post title', () => {
              const el = shallow(<Component />);
              expect(el).not.to.be.null;
            });
          });
      - type: create
        path: stories/$name_stories.ts
        text: |
          import React from 'react';
          import { storiesOf, action } from '@kadira/storybook';
          import Component from '../$name';

          storiesOf('module.$name', module)
            .add('default view', () => {
              return (
                <Component />
              );
            })
      - type: replace
        path: stories/index.ts
        what: // imports
        replace: |
          // imports
          import $name from "./$name_stories";
  # Module container template
  - name: containers
    text: |
      import { useDeps, composeWithTracker, composeAll } from "../../../configs/context";
      import Component from "../components/$1";

      interface IProps {
        context?: () => IContext;
        clearErrors: Function;
      }

      export const composer = ({context, clearErrors}, onData) => {
        const { Meteor, Collections } = context();
        if (Meteor.subscribe("$3", postId).ready()) {
          const options = {
            sort: {createdAt: -1}
          };
          const data = {Collections.$2.find({$2}, options).fetch()};
          onData(null, {data});
        } else {
          onData();
        }

        return clearErrors;
      };

      export const depsMapper = (context, actions) => ({
        create: actions.schedule.create,
        handleSearch: actions.schedule.handleSearch,
        context: () => context
      });

      export default composeAll(
        composeWithTracker(composer),
        useDeps(depsMapper)
      )(Component);
    placeholders:
      - Component Name
      - Collection Name
      - Subscription
    actions:
      - type: create
        path: tests/$name_test.ts
        text: |
          const { describe, it } = global;
          import {expect} from 'chai';
          import {spy, stub} from 'sinon';
          import {composer, depsMapper} from '../newpost';

          describe('component', () => {
            describe('composer', () => {
              it('should get SAVING_ERROR from local state', () => {
                const LocalState = {get: spy()};
                const context = () => ({LocalState});

                composer({context}, spy());

                const args = LocalState.get.args[0];
                expect(args).to.have.length(1);
                expect(args[0]).to.be.equal('SAVING_ERROR');
              });
            });
          });
  # Module route template
  - name: route
    show: true
    create: true
    text: |
      import React from "react";
      import { mount } from "mantra-core";

      export default function (injectDeps) {
        //const MainLayoutCtx = injectDeps(MainLayout);

        // Move these as a module and call this from a main file
        // FlowRouter.route("/", {
        //   name: "ei.list",
        //   action() {
        //     mount(MainLayoutCtx, {
        //       content: () => (<EiList />)
        //     });
        //   }
        // });
      }

  # Module index template
  - name: module
    show: true
    create: true
    text: |
      import actions from "./actions";
      import routes from "./routes";

      export default {
        actions,
        routes
      };

  # Server publication template
  - name: server/publications
    text: |
      import {Meteor} from 'meteor/meteor';
      import {check} from 'meteor/check';

      export default function () {
        Meteor.publish("$1", function () {
          const selector = {};
          const options = {
            // fields: {_id: 1, title: 1},
            // sort: {createdAt: -1},
            // limit: 10
          };

          return $2.find(selector, options);
        });
      }
    placeholders:
      - Publication Name
      - Collection
    actions:
      - type: replace
        path: index.ts
        what: export default function () {
        replace: |
          import $name from "./$name";
          export default function () {
      - type: replace
        path: index.ts
        what: export default function () {
        replace: |
          export default function () {
            $name();
  # Method template
  - name: server/methods
    text: |
      import {Meteor} from 'meteor/meteor';
      import {check} from 'meteor/check';

      export default function () {
        Meteor.methods({
          '$1'($2) {
            check($2, String);
          }
        });
      }
    placeholders:
      - Method Name
      - Parameters
    actions:
      - type: replace
        path: index.ts
        what: export default function () {
        replace: >
          import $name from "./$name";
          export default function () {
      - type: replace
        path: index.ts
        what: export default function () {
        replace: >
          export default function () {
          $name();
  - name: server
    create: true
    show: true
    text: |
      import publications from "./publications/index";
      import methods from "./methods/index";
      // import addInitialData from "./configs/initial_adds";

      publications();
      methods();
      // addInitialData();
  - name: publicationIndex
    create: true
    text: |
      export default function () {
      }
  - name: methodIndex
    create: true
    text: |
      export default function () {
      }

  # context template
  - name: context
    create: true
    text: |
      import * as Collections from "../../lib/collections";

      import {Meteor} from 'meteor/meteor';
      import {FlowRouter} from 'meteor/kadira:flow-router';
      import {ReactiveDict} from 'meteor/reactive-dict';
      import {Tracker} from 'meteor/tracker';

      export default function () {
        return {
          Meteor,
          FlowRouter,
          Collections,
          LocalState: new ReactiveDict(),
        };
      }

  # client index template
  - name: client
    create: true
    show: true
    text: |
      import "./configs/config";

      import {createApp} from 'mantra-core';

      import coreModule from "./modules/core/index";
      import initContext from "./configs/context";

      // init context

      const context = initContext();

      // create app

      const app = createApp(context);
      app.loadModule(coreModule);
      app.init();
    actions:
      - type: replace
        path: ../index.ts
        what: import {createApp} from 'mantra-core';
        replace: |
          import {createApp} from 'mantra-core';
          import $nameModule from "./modules/$name";
      - type: replace
        path: ../index.ts
        what: app.init();
        replace: |
          app.loadModule($nameModule);
          app.init()
```
