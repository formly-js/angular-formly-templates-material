import testUtils from './../test-utils';

describe("formlyMaterial - checkbox type", () => {
    
    //
    // vars
    //
    let formlyConfig;
    let $compile;
    let $rootScope;
    let $scope;
    let element;
    
    //
    // helpers
    //

    function compile(options) {
        $scope = $rootScope.$new();
        $scope.fields = [angular.merge({}, {
            key: 'testField',
            type: 'checkbox',
            templateOptions: {
                label: 'test field'
            }
        }, options)];

        let form = $compile(testUtils.getFormTemplate())($scope);
        $scope.$digest();
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
    
    it('should be md-checkbox element', () => {
        expect(element[0].nodeName).toBe('MD-CHECKBOX');
    });
    
    it("should have label", () => {
        expect(element.html()).toContain("test field");
    });
    
});