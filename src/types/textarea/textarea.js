export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'textarea',
        template: `<textarea ng-model="model[options.key]"></textarea>`,
        wrapper: ['label', 'messages', 'inputContainer'],
        defaultOptions: {
            ngModelAttrs: {
                rows: {attribute: 'rows'},
                cols: {attribute: 'cols'}
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                rows: check.number.optional,
                cols: check.number.optional
            }
        })
    });
}