var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'label',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/label/label.ng.html'),
            apiCheck: (check) => ({
                templateOptions: {
                    label: check.string
                }
            })
        });

    }]);
