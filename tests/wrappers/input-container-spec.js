import testUtils from './../test-utils';

describe("formlyMaterial - inputContainer wrapper", () => {

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

    function compile() {
        $scope = $rootScope.$new();
        $scope.fields = [{
            key: 'testField',
            type: 'checkbox',
            wrapper: ['inputContainer'],
            templateOptions: {
                label: 'test field'
            }
        }];

        let form = $compile(testUtils.getFormTemplate())($scope);
        $scope.$digest();
        element = form.find('md-input-container');
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

    it('should exist', () => {
        expect(element.length).toBe(1);
    });

    it("should contain field", () => {
        expect(element.find('md-checkbox').length).toBe(1);
    });

});