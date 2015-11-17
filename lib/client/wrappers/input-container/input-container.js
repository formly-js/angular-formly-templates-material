var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        /**
         * @deprecated since version 0.4.0
         */
        formlyConfigProvider.setWrapper({
            name: 'mdInputContainer',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/input-container/input-container.ng.html')
        });

        formlyConfigProvider.setWrapper({
            name: 'inputContainer',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/input-container/input-container.ng.html')
        });

    });