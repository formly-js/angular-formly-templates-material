import testUtils from './../test-utils';

describe("formlyMaterial - switch type", () => {

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

    it('should be md-switch element', () => {
        expect(element[0].nodeName).toBe('MD-SWITCH');
    });

    it("should have label", () => {
        expect(element.find('.md-label > span').html()).toContain(field.templateOptions.label);
    });

});