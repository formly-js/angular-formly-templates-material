# Change Log

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## [0.14.1](https://github.com/formly-js/angular-formly-templates-material/compare/v0.14.0...v0.14.1) - 2016-01-27

### Added

- Demo (formly-material.meteor.com)

### Fixed

- #22
- #23

## [0.14.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.13.0...v0.14.0)

### Added

- (chips) support for **templateOptions.disabled** (#14) (eea2fcf, f2d2e40)
- (radio) support for **templateOptions.disabled** (#13) (e6104ea, c04f63d)
- (checkbox) support for **templateOptions.disabled** (bdbe651, aec4e60)
- (datepicker) support for **templateOptions.disabled** (41b99d6, 7ee864a)
- (input) support for **templateOptions.disabled** (2b528c3, 18c819f)
- (select) support for **templateOptions.disabled** (2bb10e0, 9f76f0e)
- (slider) support for **templateOptions.disabled** (27d1d2a, f6b5890)
- (switch) support for **templateOptions.disabled** (7c1865c, 178ac76)
- (textarea) support for **templateOptions.disabled** (858f9fa, 8a246f5)
- **templateOptions.className** option (equivalent to ng-class) (#15, #16) (718c172, d656b4c)

## [0.13.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.12.0...v0.13.0)

### Added

- (input) support for **ng-pattern** as **templateOptions.pattern** (#10)
- (chips) has now **label** wrapper
- (datepicker) has now **label** wrapper
- (radio) has now **label** wrapper (#9)
- (slider) has now **label** wrapper

## [0.12.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.11.0...v0.12.0) - 2015-12-30

### Added

-	(messages) support for `errorExistsAndShouldBeVisible` (#7)
-	(input) support for **min** attribute of 'number' type (#6)
-	(input) support for **max** attribute of 'number' type (#6)
-	(input) support for **step** attribute of 'number' type (#6)

## [0.11.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.10.0...v0.11.0) - 2015-12-18

### Added

-	(chips) onAdd callback (equivalent to md-on-add)
-	(chips) onRemove callback (equivalent to md-on-remove)
-	(chips) onSelect callback (equivalent to md-on-select)

## [0.10.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.9.0...v0.10.0) - 2015-12-17

### Added

-	(textarea) **grow** option (equivalent to md-no-autogrow)
-	**divider** wrapper ([see documentation](docs/wrappers/divider.md)\)

## [0.9.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.8.0...v0.9.0) - 2015-12-17

### Added

-	(select) **onClose** and **onOpen** options (equivalent to md-on-close and md-on-open)

## [0.8.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.7.3...v0.8.0) - 2015-12-16

### Changed

-	BREAKING CHANGE: requires now **angular-material v1.0.0**
-	BREAKING CHANGE: for meteor package uses now **formly:angular-formly** instead of wieldo:angular-formly

## [0.7.3](https://github.com/formly-js/angular-formly-templates-material/compare/v0.7.2...v0.7.3) - 2015-12-14

### Changed

-	Package name in AtmosphereJS (formly:angular-formly-templates-material)

## [0.7.2](https://github.com/formly-js/angular-formly-templates-material/compare/v0.7.1...v0.7.2) - 2015-12-08

### Added

-	Documentation for all fields and wrappers
-	Banner with version in dist files

### Changed

-	Links to repository after transfer from wieldo to formly-js

## [0.7.1](https://github.com/formly-js/angular-formly-templates-material/compare/v0.7.0...v0.7.1) - 2015-12-01

### Changed

-	use bound for datepicker's minDate, maxDate and filterDate instead of template manipulator
-	remove bound from slider's min, max and step attributes

## [0.7.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.6.0...v0.7.0) - 2015-11-29

### Added

-	support for npm and bower (angular-formly-material).

### Changed

-	Unit testing using karma instead of velocity (with coverage reports)

## [0.6.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.5.2...v0.6.0) - 2015-11-27

### Added

-	compatibility with Meteor releases lower then 1.2

## [0.5.2](https://github.com/formly-js/angular-formly-templates-material/compare/v0.5.1...v0.5.2) - 2015-11-19

### Fixed

-	missing md-theme attribute when using templateOptions.theme

### Added

-	Tests of all currently available functionality

### Removed

-	deprecated **mdInputContainer** wrapper. Use **inputContainer**
-	deprecated **mdMessages** wrapper. Use **messages**

## [0.5.1](https://github.com/formly-js/angular-formly-templates-material/compare/v0.5.0...v0.5.1) - 2015-11-18

### Changed

-	Refactor all files to use Strict Dependency Injection

## [0.5.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.4.0...v0.5.0) - 2015-11-18

### Added

-	multiple support for select field
-	slider field with min, max, step and discrete options

## [0.4.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.3.0...v0.4.0) - 2015-11-17

### Added

-	**md-chip** with placeholder, secondary-placeholder, delete-button-label and delete-hint

### Deprecated

-	**mdInputContainer** wrapper. Use **inputContainer**
-	**mdMessages** wrapper. Use **messages**

## [0.3.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.2.0...v0.3.0) - 2015-11-17

### Added

-	datepicker with date range and filtering *(currently in angular-material 1.0_RC4)*
-	Tests of formlyMaterial provider

## [0.2.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.1.0...v0.2.0) - 2015-11-17

### Added

-	Support for textarea with cols and rows
-	ApiCheck for label, radio and select
-	Support for md-theme

## [0.1.0](https://github.com/formly-js/angular-formly-templates-material/compare/v0.0.4...v0.1.0) - 2015-11-17

### Added

-	Support for md-select with valueProp and labelProp
-	Support for md-radio with valueProp and labelProp options

## [0.0.4](https://github.com/formly-js/angular-formly-templates-material/compare/v0.0.3...v0.0.4) - 2015-11-13

### Removed

-	es5-shim package
-	standard-minifier package

## [0.0.3](https://github.com/formly-js/angular-formly-templates-material/compare/v0.0.2...v0.0.3) - 2015-11-10

### Fixed

-	Invalid components templateUrl

### Changed

-	Package name: wieldo:angular-formly-templates-material

## [0.0.2](https://github.com/formly-js/angular-formly-templates-material/compare/v0.0.1...v0.0.2) - 2015-11-07

### Fixed

-	Add missing ngMessages

### Added

-	showError in Messages wrapper
-	md-checkbox
-	mdTheme to checkbox, switch
-	md-switch

## 0.0.1 - 2015-11-06
