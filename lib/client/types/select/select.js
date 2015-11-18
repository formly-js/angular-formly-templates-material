var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'select',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/select/select.ng.html'),
            wrapper: ['label', 'messages', 'inputContainer'],
            defaultOptions: {
                ngModelAttrs: {
                    multiple: {bound: 'multiple'}
                }
            },
            apiCheck: (check) => ({
                templateOptions: {
                    options: check.arrayOf(check.object),
                    multiple: check.bool.optional,
                    labelProp: check.string.optional,
                    valueProp: check.string.optional
                }
            })
        });

    });