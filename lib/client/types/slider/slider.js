var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'slider',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/slider/slider.ng.html'),
            defaultOptions: {
                ngModelAttrs: {
                    min: {
                        bound: 'min',
                        attribute: 'min'
                    },
                    max: {
                        bound: 'max',
                        attribute: 'max'
                    },
                    step: {
                        bound: 'step',
                        attribute: 'step'
                    },
                    discrete: {
                        bound: 'md-discrete'
                    }
                }
            },
            apiCheck: (check) => ({
                templateOptions: {
                    min: check.number.optional,
                    max: check.number.optional,
                    step: check.number.optional,
                    discrete: check.bool.optional
                }
            })
        });

    });