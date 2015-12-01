import template from './slider.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'slider',
        template: template,
        defaultOptions: {
            ngModelAttrs: {
                min: {
                    attribute: 'min'
                },
                max: {
                    attribute: 'max'
                },
                step: {
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
}