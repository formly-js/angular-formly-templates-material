import testUtils from './../test-utils';

describe("formlyMaterial - theme manipulator", () => {

    //
    // vars
    //
    let formlyConfig;
    let $compile;
    let $rootScope;
    let $scope;
    let element;
    let field;

    //
    // helpers
    //

    function compile(options) {
        $scope = $rootScope.$new();
        $scope.fields = [angular.merge({}, {
            key: 'testField',
            type: 'switch',
            templateOptions: {
                theme: "custom",
                label: 'test field'
            }
        }, options)];

        let form = $compile(testUtils.getFormTemplate())($scope);
        
        $scope.$digest();
        element = form.find('[ng-model]');
        field = $scope.fields[0];
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

    it('should be able to add md-theme attribute', () => {
        compile();
        expect(element.attr('md-theme')).toBe('custom');
    });

    it("should be able to skip md-theme", () => {
        compile({
            extras: {
                skipNgModelAttrsManipulator: true
            }
        });
        expect(element.attr('md-theme')).toBeUndefined();
    });

});