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

        let form = $compile(testUtils.formTemplate)($scope);
        $scope.$digest();
        element = form.find('[ng-model]')[0];
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

        const types = ['checkbox'];

        types.forEach((type) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, type);
        });
        
        compile();
    });
    
    it('should be md-checkbox element', () => {
        expect(element.nodeName).toBe('MD-CHECKBOX');
    });
    
    it("should have label", () => {
        expect(element.innerText).toContain("test field");
    });
    
});