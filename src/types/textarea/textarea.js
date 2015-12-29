import template from './textarea.html';
import { ngModelAttrsTransformer } from './../../helpers';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'textarea',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      ngModelAttrs: {
        rows: {
          attribute: 'rows'
        },
        cols: {
          attribute: 'cols'
        }
      },
      templateOptions: {
        grow: true
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        rows: check.number.optional,
        cols: check.number.optional,
        grow: check.bool.optional
      }
    })
  });

  formlyConfigProvider.extras.fieldTransform.push((fields) => {
    return ngModelAttrsTransformer(fields, (field) => (
      field.type === 'textarea' &&
      field.templateOptions.grow === false
    ), 'grow', {
      attribute: 'md-no-autogrow'
    });
  });
};
