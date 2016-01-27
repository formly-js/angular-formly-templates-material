import {
  ngModelAttrsManipulator
}
from './../helpers';

export default (formlyConfigProvider) => {
  formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
    // adds md-theme only when:
    // templateOptions.theme is defined
    if (typeof options.templateOptions.theme !== 'undefined') {
      return ngModelAttrsManipulator(template, options, 'md-theme', options.templateOptions.theme);
    }
    return template;
  });
};
