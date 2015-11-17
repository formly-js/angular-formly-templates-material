var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'chips',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/chips/chips.ng.html'),
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

    });
