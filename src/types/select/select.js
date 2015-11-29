import template from './select.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'select',
        template: template,
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
}