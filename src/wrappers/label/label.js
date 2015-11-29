import template from './label.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'label',
        template: template,
        apiCheck: (check) => ({
            templateOptions: {
                label: check.string
            }
        })
    });
}