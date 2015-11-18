var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'textarea',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/textarea/textarea.ng.html'),
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

    }]);