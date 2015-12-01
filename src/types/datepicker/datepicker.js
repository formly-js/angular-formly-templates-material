import template from './datepicker.html';

export default (formlyConfigProvider) => {
    formlyConfigProvider.setType({
        name: 'datepicker',
        template: template,
        wrapper: ['messages'],
        defaultOptions: {
            ngModelAttrs: {
                placeholder: {
                    attribute: 'md-placeholder'
                },
                minDate: {
                    bound: 'md-min-date'
                },
                maxDate: {
                    bound: 'md-max-date'
                },
                filterDate: {
                    bound: 'md-date-filter'
                }
            }
        },
        apiCheck: (check) => ({
            templateOptions: {
                placeholder: check.string.optional,
                minDate: check.instanceOf(Date).optional,
                maxDate: check.instanceOf(Date).optional,
                filterDate: check.func.optional
            }
        })
    });
}