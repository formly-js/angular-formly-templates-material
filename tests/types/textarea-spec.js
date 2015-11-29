import testUtils from './../test-utils';

describe("formlyMaterial - textarea type", () => {

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
            type: 'textarea',
            templateOptions: {
                label: 'test field',
                rows: 5,
                cols: 6
            }
        }, options)];

        form = $compile(testUtils.getFormTemplate())($scope);
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

    it('should be input element', () => {
        expect(element[0].nodeName).toBe('TEXTAREA');
    });

    it('should have messages wrapper', () => {
        expect(form.find('[ng-messages]').length).toBe(1);
    });

    it('should have label wrapper', () => {
        let label = form.find('label');

        expect(label.length).toBe(1);
        expect(label.html()).toContain(field.templateOptions.label);
    });

    it('should have inputContainer wrapper', () => {
        expect(form.find('md-input-container').length).toBe(1);
    });
    
    it('should be able to set rows', () => {
        expect(parseInt(element.attr('rows'))).toEqual(field.templateOptions.rows);
    });

    it('should be able to set cols', () => {
        expect(parseInt(element.attr('cols'))).toEqual(field.templateOptions.cols);
    });

});
