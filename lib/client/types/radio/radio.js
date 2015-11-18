var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'radio',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/radio/radio.ng.html'),
            apiCheck: (check) => ({
                templateOptions: {
                    options: check.arrayOf(check.object),
                    labelProp: check.string.optional,
                    valueProp: check.string.optional
                }
            })
        });

    }]);