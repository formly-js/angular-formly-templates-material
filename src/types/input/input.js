import template from './input.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'input',
        template: template,
        wrapper: ['label', 'messages', 'inputContainer'],
        defaultOptions: {
            ngModelAttrs: {
                mdMaxlength: {
                    bound: 'md-maxlength'
                }
            }
        }
    });
}