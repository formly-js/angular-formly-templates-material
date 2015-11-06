var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'checkbox',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/checkbox/checkbox.ng.html')
        });

    });