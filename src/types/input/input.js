import template from './input.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'input',
    wrapper: ['label', 'messages', 'inputContainer'],
    defaultOptions: {
      ngModelAttrs: {
        mdMaxlength: {
          bound: 'md-maxlength'
        }
      }
    }
  });
};
