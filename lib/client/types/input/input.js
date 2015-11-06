var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'input',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/input/input.ng.html'),
            wrapper: ['mdLabel', 'mdMessages', 'mdInputContainer'],
            defaultOptions: {
                ngModelAttrs: {
                    mdMaxlength: {
                        bound: 'md-maxlength'
                    }
                }
            }
        });

    });