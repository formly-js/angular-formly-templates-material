export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'chips',
        template: `<md-chips ng-model="model[options.key]"></md-chips>`,
        defaultOptions: {
            defaultValue: [],
            ngModelAttrs: {
                placeholder: {attribute: 'placeholder'},
                secondaryPlaceholder: {attribute: 'secondary-placeholder'},
                deleteButtonLabel: {attribute: 'delete-button-label'},
                deleteHint: {attribute: 'delete-hint'}
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                placeholder: check.string.optional,
                secondaryPlaceholder: check.string.optional,
                deleteButtonLabel: check.string.optional,
                deleteHint: check.string.optional
            }
        })
    });
}