describe("formlyMaterial - messages wrapper", () => {

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

    function compile() {
        $scope = $rootScope.$new();
        $scope.fields = [{
            key: 'testField',
            type: 'checkbox',
            wrapper: ['messages'],
            templateOptions: {
                label: 'test field'
            }
        }];

        let form = $compile(testUtils.formTemplate)($scope);
        $scope.$digest();
        element = form.find('[ng-messages]');
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

        const types = ['checkbox'];
        const wrappers = ['messages'];

        types.forEach((name) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, name);
        });
        wrappers.forEach((name) => {
            testUtils.fixWrapperTemplateUrl(formlyConfig, name);
        });

        compile();
    });

    it('should exist', () => {
        expect(element.length).toBe(1);
    });

    it("should be after the field", () => {
        expect(element.find('md-checkbox').length).toBe(0);
        expect(element.before('[ng-messages]').length).toBe(1);
    });

});
