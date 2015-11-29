export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'checkbox',
        template: `
            <div>
                <md-checkbox ng-model="model[options.key]">
                    {{to.label}}
                </md-checkbox>
            </div>`
    });
}