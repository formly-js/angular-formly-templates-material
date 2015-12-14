FormlyMaterial
==============

[![Join the chat at https://gitter.im/formly-js/angular-formly-templates-material](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/formly-js/angular-formly-templates-material?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)[![GitHub version](https://badge.fury.io/gh/formly-js%2Fangular-formly-templates-material.svg)](https://badge.fury.io/gh/formly-js%2Fangular-formly-templates-material)[![Build Status](https://travis-ci.org/formly-js/angular-formly-templates-material.svg)](https://travis-ci.org/formly-js/angular-formly-templates-material)[![Coverage Status](https://coveralls.io/repos/formly-js/angular-formly-templates-material/badge.svg?branch=master&service=github)](https://coveralls.io/github/formly-js/angular-formly-templates-material?branch=master)[![Codacy Badge](https://api.codacy.com/project/badge/grade/a2cd4c7c2d74467281e309a65be49e8f)](https://www.codacy.com/app/mys-sterowiec/angular-formly-templates-material)

Material Design Templates for [Angular-Formly](http://angular-formly.com). Modern & flexible forms configured easily in a JSON object.

Install
-------

```
npm install angular-formly-material
```

```
bower install angular-formly-material
```

```
meteor add formly:angular-formly-templates-material
```

Getting Started
---------------

1.	Add package using one of methods above
2.	Add the following dependencies to your AngularJS module:

```javascript
angular.module('myAppName', [
    'formlyMaterial'
  ])
```

Requirements
------------

-	angular ~ 1.4.0
-	angular-messages ~ 1.4.0
-	angular-material ~ 0.11.0
-	angular-formly ~ 7.3.0

Components
==========

Any requests? Add issue!

Fields
------

-	[checkbox](docs/types/checkbox.md)
-	[chips](docs/types/chips.md)
-	[datepicker](docs/types/datepicker.md)
-	[input](docs/types/input.md)
-	[radio](docs/types/radio.md)
-	[select](docs/types/select.md)
-	[slider](docs/types/slider.md)
-	[switch](docs/types/switch.md)
-	[textarea](docs/types/textarea.md)

Wrappers
--------

-	[input-container](docs/wrappers/input-container.md)
-	[label](docs/wrappers/label.md)
-	[messages](docs/wrappers/messages.md)

Common settings
---------------

### label (string)

Text used as a field's label

### theme (string)

Value of md-theme used on field

Roadmap
-------

-	[x] add md-chips
-	[x] add md-datepicker
-	[ ] add md-icon wrapper
-	[x] add md-slider with min, max, step and discrete options
-	[x] add md-select
-	[x] multiple in md-select
-	[ ] add groups to md-select
-	[x] add valueProp, labelProp to md-select
-	[x] add md-radio with valueProp and labelProp
-	[x] add textarea with cols and rows
-	[x] md-theme
-	[ ] e2e tests

Requests (?). Post an issue.
