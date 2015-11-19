describe("formlyMaterial - slider type", () => {

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
            type: 'slider',
            templateOptions: {
                label: 'test field',
                min: 1,
                max: 5,
                step: 0.5,
                discrete: true
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

        const types = ['slider'];

        types.forEach((type) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, type);
        });

        compile();
    });

    it('should be md-slider element', () => {
        expect(element[0].nodeName).toBe('MD-SLIDER');
    });

    it('should support min option', () => {
        expect(parseFloat(element.attr('min'))).toEqual(field.templateOptions.min);
    });

    it('should support max option', () => {
        expect(parseFloat(element.attr('max'))).toEqual(field.templateOptions.max);
    });

    it('should support step option', () => {
        expect(parseFloat(element.attr('step'))).toEqual(field.templateOptions.step);
    });

    it('should support discrete option', () => {
        expect(element.attr('md-discrete')).toEqual("options.templateOptions['discrete']");
    });

});
