export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'input',
        template: `<input ng-model="model[options.key]">`,
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