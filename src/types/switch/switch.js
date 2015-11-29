export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'switch',
        template: `<md-switch ng-model="model[options.key]">{{to.label}}</md-switch>`
    });
}