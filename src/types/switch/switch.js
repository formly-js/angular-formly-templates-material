import template from './switch.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'switch',
    defaultOptions: {
      templateOptions: {
        disabled: false
      },
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
