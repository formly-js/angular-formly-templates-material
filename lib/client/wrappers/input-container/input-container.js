var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'mdInputContainer',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/input-container/input-container.ng.html')
        });

    });