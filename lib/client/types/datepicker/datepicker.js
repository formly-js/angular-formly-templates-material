var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider, formlyMaterialProvider) => {

        formlyConfigProvider.setType({
            name: 'datepicker',
            templateUrl: formlyMaterialProvider.templateUrl('lib/client/types/datepicker/datepicker.ng.html'),
            wrapper: ['messages'],
            defaultOptions: {
                ngModelAttrs: {
                    placeholder: {attribute: 'md-placeholder'}
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

        formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
            if (angular.isDefined(options.templateOptions.minDate)
                || angular.isDefined(options.templateOptions.maxDate)
                || angular.isDefined(options.templateOptions.filterDate)) {

                const dateConfig = {
                    min: options.templateOptions.minDate || undefined,
                    max: options.templateOptions.maxDate || undefined,
                    filter: options.templateOptions.filterDate || undefined
                };
                const node = document.createElement('div');

                node.innerHTML = template;
                const datepickerNode = node.querySelector('md-datepicker');

                if (datepickerNode) {
                    if (dateConfig.min) {
                        datepickerNode.setAttribute('md-min-date', 'to.minDate');
                    }
                    if (dateConfig.max) {
                        datepickerNode.setAttribute('md-max-date', 'to.maxDate');
                    }
                    if (dateConfig.filter) {
                        datepickerNode.setAttribute('md-date-filter', 'to.filterDate');
                    }
                }
                return node.innerHTML;
            }


            return template;
        });

    });
