FormlyMaterial
==========

Material Design Templates for [Angular-Formly](http://angular-formly.com). Modern & flexible forms configured easily in a JSON object.

**Angular Formly is not part of Atmosphere. You have to add it manually**

## Install

```
meteor add mys:angular-formly-templates-material
```


## Getting Started

1. Add package using `meteor add`
2. Add manually angular-formly library to your project
3. Add the following dependencies to your Angular module:

```javascript
angular.module('myAppName', [
    'ngMessages',
    'ngMaterial',
    'formly',
    'formlyMaterial'
  ])
```

# Components

_rest of angular-material directive in near future_

## Fields

- input
- checkbox

## Wrappers

- mdInputContainer
- label
- ngMessages

## Roadmap
- add md-chips
- add md-datepicker
- add md-icon wrapper
- add md-radio-button and md-radio-group
- add md-select
- e2e tests
- Requests (?). Post an issue.