import template from './radio.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'radio',
        template: template,
        apiCheck: (check) => ({
            templateOptions: {
                options: check.arrayOf(check.object),
                labelProp: check.string.optional,
                valueProp: check.string.optional
            }
        })
    });
}