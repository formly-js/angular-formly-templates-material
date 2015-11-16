var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'select',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/select/select.ng.html'),
            wrapper: ['mdLabel', 'mdMessages', 'mdInputContainer']
        });

    });