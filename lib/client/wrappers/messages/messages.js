var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'mdMessages',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/messages/messages.ng.html')
        });

    });