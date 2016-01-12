import template from './select.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'select',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      templateOptions: {
        disabled: false
      },
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        },
        multiple: {
          bound: 'multiple'
        },
        onClose: {
          bound: 'md-on-close'
        },
        onOpen: {
          bound: 'md-on-open'
        }
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        disabled: check.bool.optional,
        options: check.arrayOf(check.object),
        multiple: check.bool.optional,
        labelProp: check.string.optional,
        valueProp: check.string.optional,
        onClose: check.func.optional,
        onOpen: check.func.optional
      }
    })
  });
};
