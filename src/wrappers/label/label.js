export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'label',
        template: `
        <label for="{{id}}">{{to.label}}{{to.required ? '*' : ''}}</label>
        <formly-transclude></formly-transclude>`,
        apiCheck: (check) => ({
            templateOptions: {
                label: check.string
            }
        })
    });
}