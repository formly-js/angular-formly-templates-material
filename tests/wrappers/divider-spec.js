import testUtils from './../test-utils';

describe("formlyMaterial - divider wrapper", () => {

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
            type: 'checkbox',
            wrapper: ['divider']
        }, options)];

        let form = $compile(testUtils.getFormTemplate())($scope);
        $scope.$digest();
        element = form.find('md-divider');
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
    });

    it('should exist', () => {
        compile();
        expect(element.length).toBe(1);
    });

    it("should be after the field by default", () => {
        compile();
        // not transcluded inner
        expect(element.find('md-checkbox').length).toBe(0);
        // checkbox transcluded before
        expect(element.prev('.ng-scope').children('md-checkbox').length).toBe(1);
    });

    it("should be before the field when divider option equals 'before'", () => {
        compile({
          templateOptions: {
            divider: 'before'
          }
        });
        // not transcluded inner
        expect(element.find('md-checkbox').length).toBe(0);
        // checkbox transcluded before
        expect(element.next('.ng-scope').children('md-checkbox').length).toBe(1);
    });

});
