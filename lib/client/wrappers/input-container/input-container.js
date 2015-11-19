var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'inputContainer',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/input-container/input-container.ng.html')
        });

    }]);