import {
  ngModelAttrsManipulator
}
from './../helpers/index.js';

export default (formlyConfigProvider) => {
  formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
    if (!angular.isDefined(options.templateOptions.grow)) {
      return template;
    }
    if (options.templateOptions.grow !== false) {
      return template;
    }
    if (!angular.isDefined(options.type) || options.type !== 'textarea') {
      return template;
    }

    return ngModelAttrsManipulator(template, options, 'md-no-autogrow');
  });
}
