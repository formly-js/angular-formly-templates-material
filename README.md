FormlyMaterial
==========

[![GitHub version](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material.svg)](https://badge.fury.io/gh/wieldo%2Fangular-formly-templates-material)
[![Build Status](https://travis-ci.org/wieldo/angular-formly-templates-material.svg)](https://travis-ci.org/wieldo/angular-formly-templates-material)
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

md-theme attribute

## Fields

### input

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
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

```javascript
{
  "type": "switch",
  "key": "terms",
  "templateOptions": {
    "label": "Terms and Conditions",
    "theme": "custom"
  }
}
```

### datepicker

**placeholder (string, optional)**

md-placeholder

**minDate (Date, optional)**

md-min-date

**maxDate (Date, optional)**

md-max-date

**filterDate (function, optional)**

md-filter-date

```javascript
{
  "type": "datepicker",
  "key": "start",
  "templateOptions": {
    "theme": "custom",
    "placeholder": "Start date",
    "minDate": minDate, // instance of Date
    "maxDate": maxDate, // instance of Date
    "filterDate": function(date) {
        // only weekends
        var day = date.getDay();
        return day === 0 || day === 6;
    }
  }
}
```

### chips

**placeholder (string, optional)**

placeholder attribute value

**secondaryPlaceholder (string, optional)**

secondary-placeholder attribute value

**deleteButtonLabel (string, optional)**

delete-button-label attribute value

**deleteHint (string, optional)**

delete-hint attribute value

```javascript
{
  "type": "chips",
  "key": "tags",
  "templateOptions": {
    "theme": "custom",
    "placeholder": "+tags",
    "secondaryPlaceholder": "Add tag",
    "deleteButtonLabel": "Remove",
    "deleteHint": "Remove tag"
  }
}
```


## Wrappers

- mdInputContainer
- label
- mdMessages

## Roadmap

- [x] add md-chips
- [x] add md-datepicker
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
