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
        // XXX angular-formly#8042d2a so we want to keep it compatible
        // with angular-formly releases before that commit
        step: {
          attribute: 'step'
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
          ]).optional,
          theme: check.string.optional
        }
      };
    }
  });
};
