import testUtils from './../test-utils';

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
    const fieldConfig = {
        key: 'testField',
        type: 'slider',
        templateOptions: {
            label: 'test field',
            min: 1,
            max: 5,
            step: 0.5,
            discrete: true
        }
    };
    //
    // helpers
    //

    function compile(options) {
        $scope = $rootScope.$new();
        $scope.fields = [angular.merge({}, fieldConfig, options)];

        form = $compile(testUtils.getFormTemplate())($scope);
        $scope.$digest();
        field = $scope.fields[0];
        element = form.find('[ng-model]');
    }

    //
    // tests
    //

    beforeEach(() => {
        window.module('formlyMaterial');

        inject((_$compile_, _$rootScope_, _formlyConfig_) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            formlyConfig = _formlyConfig_;
        });

        compile();
    });

    it('should be md-slider element', () => {
        expect(element[0].nodeName).toBe('MD-SLIDER');
    });

    it('should support min option', () => {
        expect(parseFloat(element.attr('min'))).toEqual(fieldConfig.templateOptions.min);
    });

    it('should support max option', () => {
        expect(parseFloat(element.attr('max'))).toEqual(fieldConfig.templateOptions.max);
    });

    it('should support step option', () => {
        expect(parseFloat(element.attr('step'))).toEqual(fieldConfig.templateOptions.step);
    });

    it('should support discrete option', () => {
        const scope = angular.element(element).scope();

        expect(element.attr('md-discrete')).toEqual("options.templateOptions['discrete']");
        expect(scope.options.templateOptions.discrete).toBe(fieldConfig.templateOptions.discrete);
    });

});
