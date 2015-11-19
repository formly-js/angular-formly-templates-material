describe("formlyMaterial - switch type", () => {

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
            type: 'switch',
            templateOptions: {
                label: 'test field'
            }
        }, options)];

        let form = $compile(testUtils.formTemplate)($scope);
        $scope.$digest();
        element = form.find('[ng-model]');
        field = $scope.fields[0];
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

        const types = ['switch'];

        types.forEach((type) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, type);
        });

        compile();
    });

    it('should be md-switch element', () => {
        expect(element[0].nodeName).toBe('MD-SWITCH');
    });

    it("should have label", () => {
        expect(element.find('.md-label > span')[0].innerText).toContain(field.templateOptions.label);
    });

});