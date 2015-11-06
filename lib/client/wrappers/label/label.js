var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setWrapper({
            name: 'mdLabel',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/wrappers/label/label.ng.html')
        });
        
    });