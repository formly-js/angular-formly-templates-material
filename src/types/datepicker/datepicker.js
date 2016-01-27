import template from './datepicker.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'datepicker',
    wrapper: ['label', 'messages'],
    defaultOptions: {
      templateOptions: {
        disabled: false
      },
      ngModelAttrs: {
        disabled: {
          bound: 'ng-disabled'
        },
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
        disabled: check.bool.optional,
        placeholder: check.string.optional,
        minDate: check.instanceOf(Date).optional,
        maxDate: check.instanceOf(Date).optional,
        filterDate: check.func.optional,
        theme: check.string.optional
      }
    })
  });
};
