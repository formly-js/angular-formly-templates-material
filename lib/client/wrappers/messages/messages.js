var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'messages',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/messages/messages.ng.html')
        });

    }]);