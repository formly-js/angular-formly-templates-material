# FormlyMaterial

Material Design Templates for [Angular-Formly](http://angular-formly.com). Modern & flexible forms configured easily in a JSON object.

---

**Chat**

[![Join the chat at https://gitter.im/formly-js/angular-formly-templates-material](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/formly-js/angular-formly-templates-material?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Versions**

[![GitHub version](https://badge.fury.io/gh/formly-js%2Fangular-formly-templates-material.svg)](https://badge.fury.io/gh/formly-js%2Fangular-formly-templates-material)
[![npm version](https://badge.fury.io/js/angular-formly-material.svg)](https://badge.fury.io/js/angular-formly-material)
[![Bower version](https://badge.fury.io/bo/angular-formly-material.svg)](https://badge.fury.io/bo/angular-formly-material)

**Code**

[![Build Status](https://travis-ci.org/formly-js/angular-formly-templates-material.svg)](https://travis-ci.org/formly-js/angular-formly-templates-material)
[![Coverage Status](https://coveralls.io/repos/formly-js/angular-formly-templates-material/badge.svg?branch=master&service=github)](https://coveralls.io/github/formly-js/angular-formly-templates-material?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/a2cd4c7c2d74467281e309a65be49e8f)](https://www.codacy.com/app/mys-sterowiec/angular-formly-templates-material)

---

## Table of contents

- [Install](#install)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Requests?](#requests)
- [Requirements](#requirements)
- [Components](#components)
  - [Fields](#fields)
  - [Wrappers](#wrappers)
- [Common settings](#common-settings)
  - [Theme](#theme-string)

---  

## Install

```
npm install angular-formly-material
```

```
bower install angular-formly-material
```

```
meteor add formly:angular-formly-templates-material
```

## Getting Started

1.	Add package using one of methods above
2.	Add the following dependencies to your AngularJS module:

```javascript
angular.module('myAppName', [
    'formlyMaterial'
  ])
```

## Demo

Visit [formly-material.meteor.com](http://formly-material.meteor.com/demo/input)

## Requests?

Maybe you need some new feature? Go here:

https://github.com/formly-js/angular-formly-templates-material/issues/4

## Requirements

-	angular ~ 1.4.0
-	angular-messages ~ 1.4.0
-	angular-material ~ 1.0.0
-	angular-formly ~ 7.3.0

## Components

Any requests? Add issue!

### Fields

-	[checkbox](docs/types/checkbox.md)
-	[chips](docs/types/chips.md)
-	[datepicker](docs/types/datepicker.md)
-	[input](docs/types/input.md)
-	[radio](docs/types/radio.md)
-	[select](docs/types/select.md)
-	[slider](docs/types/slider.md)
-	[switch](docs/types/switch.md)
-	[textarea](docs/types/textarea.md)

### Wrappers

-	[divider](docs/wrappers/divider.md)
-	[inputContainer](docs/wrappers/input-container.md)
-	[label](docs/wrappers/label.md)
-	[messages](docs/wrappers/messages.md)

### Common settings

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

Value of md-theme used on field

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: expression_

equivalent to ng-class on ng-model

---

Requests (?). Post an issue.
