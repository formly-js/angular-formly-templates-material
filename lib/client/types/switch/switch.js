var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'switch',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/switch/switch.ng.html')
        });

    }]);