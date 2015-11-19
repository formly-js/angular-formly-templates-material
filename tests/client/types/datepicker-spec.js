describe("formlyMaterial - datepicker type", () => {

    //
    // vars
    //
    let formlyConfig;
    let $compile;
    let $rootScope;
    let $scope;
    let form;
    let element;
    let field;
    //
    // helpers
    //

    function compile(options) {
        $scope = $rootScope.$new();
        $scope.fields = [angular.merge({}, {
            key: 'testField',
            type: 'datepicker',
            templateOptions: {
                label: 'test field',
                placeholder: "Pick a date",
                minDate: new Date(2015, 11, 19),
                maxDate: new Date(2015, 12, 20),
                filterDate: (date) => {
                    return true;
                }
            }
        }, options)];

        form = $compile(testUtils.formTemplate)($scope);
        $scope.$digest();
        field = $scope.fields[0];
        element = form.find('[ng-model]');
    }

    //
    // tests
    //

    beforeEach(() => {
        angular.module('testApp', ['angular-meteor', 'formly', 'formlyMaterial']);
        module('testApp');

        inject((_$compile_, _$rootScope_, _formlyConfig_) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            formlyConfig = _formlyConfig_;
        });

        const types = ['datepicker'];
        const wrappers = ['messages'];

        types.forEach((type) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, type);
        });
        wrappers.forEach((wrapper) => {
            testUtils.fixWrapperTemplateUrl(formlyConfig, wrapper);
        });

        compile();
    });

    it('should be md-chips element', () => {
        expect(element[0].nodeName).toBe('MD-DATEPICKER');
    });

    it('should have messages', () => {
        expect(form.find('[ng-messages]').length).toBe(1);
    });

    it('should have min date', () => {
        expect(element.attr('md-min-date')).toBe('to.minDate');
    });

    it('should have max date', () => {
        expect(element.attr('md-max-date')).toBe('to.maxDate');
    });

    it('should have date filter', () => {
        expect(element.attr('md-date-filter')).toBe('to.filterDate');
    });

});
