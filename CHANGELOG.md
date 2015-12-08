# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.7.2] - 2015-12-08
### Added
- Documentation for all fields and wrappers
- Banner with version in dist files

### Changed
- Links to repository after transfer from wieldo to formly-js

## [0.7.1] - 2015-12-01
### Changed
- use bound for datepicker's minDate, maxDate and filterDate instead of template manipulator
- remove bound from slider's min, max and step attributes

## [0.7.0] - 2015-11-29
### Added
- support for npm and bower (angular-formly-material).

### Changed
- Unit testing using karma instead of velocity (with coverage reports)

## [0.6.0] - 2015-11-27
### Added
- compatibility with Meteor releases lower then 1.2

## [0.5.2] - 2015-11-19
### Fixed
- missing md-theme attribute when using templateOptions.theme

### Added
- Tests of all currently available functionality

### Removed
- deprecated **mdInputContainer** wrapper. Use **inputContainer**
- deprecated **mdMessages** wrapper. Use **messages**

## [0.5.1] - 2015-11-18
### Changed
- Refactor all files to use Strict Dependency Injection

## [0.5.0] - 2015-11-18
### Added
- multiple support for select field
- slider field with min, max, step and discrete options

## [0.4.0] - 2015-11-17
### Added
- **md-chip** with placeholder, secondary-placeholder, delete-button-label and delete-hint
 
### Deprecated
- **mdInputContainer** wrapper. Use **inputContainer**
- **mdMessages** wrapper. Use **messages**

## [0.3.0] - 2015-11-17
### Added
- datepicker with date range and filtering _(currently in angular-material 1.0_RC4)_
- Tests of formlyMaterial provider

## [0.2.0] - 2015-11-17
### Added
- Support for textarea with cols and rows
- ApiCheck for label, radio and select
- Support for md-theme

## [0.1.0] - 2015-11-17
### Added
- Support for md-select with valueProp and labelProp
- Support for md-radio with valueProp and labelProp options

## [0.0.4] - 2015-11-13
### Removed
- es5-shim package
- standard-minifier package

## [0.0.3] - 2015-11-10
### Fixed
- Invalid components templateUrl

### Changed
- Package name: wieldo:angular-formly-templates-material

## [0.0.2] - 2015-11-07
### Fixed
- Add missing ngMessages

### Added
- showError in Messages wrapper 
- md-checkbox
- mdTheme to checkbox, switch
- md-switch

## 0.0.1 - 2015-11-06

[0.7.2]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/wieldo/angular-formly-templates-material/compare/v0.0.1...v0.0.2