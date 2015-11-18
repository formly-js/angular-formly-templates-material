var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', 'formlyMaterialProvider', (formlyConfigProvider, formlyMaterialProvider) => {

        /**
         * @deprecated since version 0.4.0
         */
        formlyConfigProvider.setWrapper({
            name: 'mdMessages',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/messages/messages.ng.html')
        });

        formlyConfigProvider.setWrapper({
            name: 'messages',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/messages/messages.ng.html')
        });

    }]);