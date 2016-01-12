import template from './input.html';
import { ngModelAttrsTransformer } from './../../helpers';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'input',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      templateOptions: {
        type: 'text',
        disabled: false
      },
      ngModelAttrs: {
        mdMaxlength: {
          bound: 'md-maxlength'
        },
        disabled: {
          bound: 'ng-disabled'
        },
        pattern: {
          bound: 'ng-pattern'
        }
      }
    },
    apiCheck: (check) => {
      return {
        templateOptions: {
          disabled: check.bool.optional,
          type: check.string,
          step: check.number.optional,
          pattern: check.oneOfType([
            check.string,
            check.instanceOf(RegExp)
          ]).optional
        }
      };
    }
  });

  // add only step attribute because min and max are both built-in
  formlyConfigProvider.extras.fieldTransform.push((fields) => {
    return ngModelAttrsTransformer(fields, (field) => (
      field.type === 'input' &&
      field.templateOptions.type === 'number'
    ), 'step', {
      attribute: 'step'
    });
  });
};
