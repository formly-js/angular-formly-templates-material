var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'select',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/select/select.ng.html'),
            wrapper: ['label', 'mdMessages', 'mdInputContainer'],
            apiCheck: (check) => ({
                templateOptions: {
                    options: check.arrayOf(check.object),
                    labelProp: check.string.optional,
                    valueProp: check.string.optional
                }
            })
        });

    });