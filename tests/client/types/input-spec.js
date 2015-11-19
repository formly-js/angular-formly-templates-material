describe("formlyMaterial - input type", () => {

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
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'test field'
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

        const types = ['input'];
        const wrappers = ['messages', 'label', 'inputContainer'];

        types.forEach((type) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, type);
        });
        wrappers.forEach((wrapper) => {
            testUtils.fixWrapperTemplateUrl(formlyConfig, wrapper);
        });

        compile();
    });

    it('should be input element', () => {
        expect(element[0].nodeName).toBe('INPUT');
    });

    it('should have proper type attribute', () => {
        expect(element.attr('type')).toBe(field.templateOptions.type);
    });

    it('should have messages wrapper', () => {
        expect(form.find('[ng-messages]').length).toBe(1);
    });

    it('should have label wrapper', () => {
        let label = form.find('label');

        expect(label.length).toBe(1);
        expect(label[0].innerText).toContain(field.templateOptions.label);
    });

    it('should have inputContainer wrapper', () => {
        expect(form.find('md-input-container').length).toBe(1);
    });

});
