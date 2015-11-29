export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'select',
        template: `
        <md-select ng-model="model[options.key]">
    <md-option ng-repeat="option in to.options" ng-value="option[to.valueProp || 'value']">
        {{ option[to.labelProp || 'name'] }}
    </md-option>
</md-select>
        `,
        wrapper: ['label', 'messages', 'inputContainer'],
        defaultOptions: {
            ngModelAttrs: {
                multiple: {bound: 'multiple'}
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                options: check.arrayOf(check.object),
                multiple: check.bool.optional,
                labelProp: check.string.optional,
                valueProp: check.string.optional
            }
        })
    });
}