var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'radio',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/radio/radio.ng.html')
        });

    });