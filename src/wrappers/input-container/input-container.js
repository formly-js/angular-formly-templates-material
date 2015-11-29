import template from './input-container.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'inputContainer',
        template: template
    });
}