export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'radio',
        template: `
        <md-radio-group ng-model="model[options.key]">
            <md-radio-button
                ng-repeat="option in to.options"
                ng-value="option[to.valueProp || 'value']">
                {{option[to.labelProp || 'name']}}
            </md-radio-button>
        </md-radio-group>
        `,
        apiCheck: (check) => ({
            templateOptions: {
                options: check.arrayOf(check.object),
                labelProp: check.string.optional,
                valueProp: check.string.optional
            }
        })
    });
}