describe("formlyMaterial - label wrapper", () => {

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
            wrapper: ['label'],
            templateOptions: {
                label: 'test field'
            }
        }];

        let form = $compile(testUtils.formTemplate)($scope);
        $scope.$digest();
        element = form.find('label');
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
        const wrappers = ['label'];

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

    it('should have proper value', () => {
        expect(element[0].innerText).toContain(field.templateOptions.label);
    });

    it("should be before the field", () => {
        expect(element.find('md-checkbox').length).toBe(0);
        expect(element.next().children()[0].nodeName).toBe('MD-CHECKBOX');
    });

});