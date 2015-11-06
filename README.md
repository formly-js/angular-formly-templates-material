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

## Fields

- input
- _rest fields in near future_

## Wrappers

- mdInputContainer
- label
- ngMessages

##Roadmap
- all basic fields
- basic wrappers
- e2e tests
- Requests (?). Post an issue.