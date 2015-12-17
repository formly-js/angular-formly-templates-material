import template from './divider.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'divider',
        template: template,
        apiCheck: (check) => ({
            templateOptions: {
                divider: check.oneOf(['before', 'after']).optional
            }
        })
    });
}
