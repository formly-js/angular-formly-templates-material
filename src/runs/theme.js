import {
  ngModelAttrsManipulator
}
from './../helpers/index.js';

export default (formlyConfigProvider) => {
  formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
    // adds md-theme only when:
    // templateOptions.theme is defined
    if (angular.isDefined(options.templateOptions.theme)) {
      return ngModelAttrsManipulator(template, options, 'md-theme', options.templateOptions.theme);
    }
    return template;
  });
};
