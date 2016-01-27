import template from './checkbox.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'checkbox',
    defaultOptions: {
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        }
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        disabled: check.bool.optional,
        theme: check.string.optional
      }
    })
  });
};
