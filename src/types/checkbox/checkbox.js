import template from './checkbox.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'checkbox',
        template: template
    });
}