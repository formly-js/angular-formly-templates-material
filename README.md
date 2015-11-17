FormlyMaterial
==========

[![GitHub version](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material.svg)](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/a2cd4c7c2d74467281e309a65be49e8f)](https://www.codacy.com/app/mys-sterowiec/angular-formly-templates-material)

Material Design Templates for [Angular-Formly](http://angular-formly.com). Modern & flexible forms configured easily in a JSON object.

## Install

```
meteor add wieldo:angular-formly-templates-material
```


## Getting Started

1. Add package using `meteor add` (see above)
2. Add the following dependencies to your AngularJS module:

```javascript
angular.module('myAppName', [
    'formlyMaterial'
  ])
```

# Components

Any requests? Add issue!

## Common properties

### label (string)

### theme (string)

```
md-theme attribute
```

## Fields

### input

```json
{
  "type": "input",
  "key": "firstName",
  "templateOptions": {
    "type": "text",
    "label": "First name",
    "theme": "custom"
  }
}
```

### textarea

**rows (number, optional)**

```json
{
  "type": "textarea",
  "key": "bio",
  "templateOptions": {
    "label": "Biography",
    "theme": "custom",
    "rows": 5
  }
}
```

### radio

**options (array, requred)**

**labelProp (string, optional)**

**valueProp (string, optional)**

```json
{
  "type": "radio",
  "key": "name",
  "templateOptions": {
    "label": "Name",
    "theme": "custom",
    "labelProp": "firstName",
    "valueProp": "id",
    "options": [
        {"firstName": "Sarah", id: 1},
        {"firstName": "Jessica", id: 2},
        {"firstName": "Parker", id: 3}
    ]
  }
}
```

### select

**options (array, requred)**

**labelProp (string, optional)**

**valueProp (string, optional)**

```json
{
  "type": "select",
  "key": "name",
  "templateOptions": {
    "label": "Name",
    "theme": "custom",
    "labelProp": "firstName",
    "valueProp": "id",
    "options": [
        {"firstName": "Sarah", id: 1},
        {"firstName": "Jessica", id: 2},
        {"firstName": "Parker", id: 3}
    ]
  }
}
```

### checkbox

```json
{
  "type": "checkbox",
  "key": "terms",
  "templateOptions": {
    "label": "Terms and Conditions",
    "theme": "custom"
  }
}
```

### switch

```json
{
  "type": "switch",
  "key": "terms",
  "templateOptions": {
    "label": "Terms and Conditions",
    "theme": "custom"
  }
}
```

## Wrappers

- mdInputContainer
- label
- ngMessages

## Roadmap

- [ ] add md-chips
- [ ] add md-datepicker
- [ ] add md-icon wrapper
- [x] add md-select
- [ ] add groups to md-select
- [x] add valueProp, labelProp to md-select
- [x] add md-radio with valueProp and labelProp
- [ ] add groupProp to md-radio
- [x] add textarea with cols and rows
- [x] md-theme
- [ ] e2e tests

Requests (?). Post an issue.
