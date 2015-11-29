export default (formlyConfigProvider) => {
    formlyConfigProvider.setWrapper({
        name: 'inputContainer',
        template: `
        <md-input-container>
            <formly-transclude></formly-transclude>
        </md-input-container>
        `
    });
}