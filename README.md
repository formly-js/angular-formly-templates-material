FormlyMaterial
==========

[![GitHub version](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material.svg)](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/a2cd4c7c2d74467281e309a65be49e8f)](https://www.codacy.com/app/mys-sterowiec/angular-formly-templates-material)

Material Design Templates for [Angular-Formly](http://angular-formly.com). Modern & flexible forms configured easily in a JSON object.

## Add Angular Formly

There is no official Angular Formly package in Atmosphere so you have to add it manually.

## Install

```
meteor add wieldo:angular-formly-templates-material
```


## Getting Started

1. Add package using `meteor add` (see above)
2. Add angular-formly files to your project
3. Add the following dependencies to your AngularJS module:

```javascript
angular.module('myAppName', [
    'formlyMaterial'
  ])
```

# Components

_rest of angular-material directive in near future_

## Fields

- input
- checkbox
- select

## Wrappers

- mdInputContainer
- label
- ngMessages

## Roadmap
- [ ] add md-chips
- [ ] add md-datepicker
- [ ] add md-icon wrapper
- [ ] add md-radio-button and md-radio-group
- [x] add md-select
- [ ] add groups to md-select
- [ ] add roupProp, valueProp, labelProp to md-select
- [ ] e2e tests

Requests (?). Post an issue.
