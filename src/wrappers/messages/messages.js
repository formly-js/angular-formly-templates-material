import template from './messages.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'messages',
        template: template
    });
}