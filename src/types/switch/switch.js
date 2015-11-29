import template from './switch.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'switch',
        template: template
    });
}