import testUtils from './../test-utils';

describe("formlyMaterial - chips type", () => {

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
            type: 'chips',
            templateOptions: {
                label: 'test field',
                placeholder: "+tags",
                secondaryPlaceholder: "Add tag",
                deleteButtonLabel: "Remove",
                deleteHint: "Remove tag"
            }
        }, options)];

        let form = $compile(testUtils.getFormTemplate())($scope);
        
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

    it('should be md-chips element', () => {
        expect(element[0].nodeName).toBe('MD-CHIPS');
    });

    it('should have placeholder', () => {
        expect(element.attr('placeholder')).toBe(field.templateOptions.placeholder);
    });

    it('should have secondary placeholder', () => {
        expect(element.attr('secondary-placeholder')).toBe(field.templateOptions.secondaryPlaceholder);
    });

    it('should have delete button label', () => {
        expect(element.attr('delete-button-label')).toBe(field.templateOptions.deleteButtonLabel);
    });

    it('should have delete hint', () => {
        expect(element.attr('delete-hint')).toBe(field.templateOptions.deleteHint);
    });

});