import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - input type', () => {
  //
  // vars
  //

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

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  describe('basics', () => {
    beforeEach(() => {
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
      const label = form.find('label');

      expect(label.length).toBe(1);
      expect(label.html()).toContain(field.templateOptions.label);
    });

    it('should have inputContainer wrapper', () => {
      expect(form.find('md-input-container').length).toBe(1);
    });
  });

  describe('number type specific', () => {
    describe('step attribute', () => {
      it('should fail on non number type', () => {
        expect(() => {
          compile({
            templateOptions: {
              type: 'text',
              step: 2
            },
            apiCheckFunction: 'throw'
          });
        }).toThrowError(Error, /step/i);
      });

      it('should not be available on non number type', () => {
        compile({
          templateOptions: {
            type: 'text',
            step: 2
          }
        });

        expect(element.attr('step')).toBeUndefined();
      });

      it('should be available on number type', () => {
        compile({
          templateOptions: {
            type: 'number',
            step: 2
          }
        });

        expect(parseInt(element.attr('step'), 10)).toEqual(field.templateOptions.step);
      });
    });

    describe('min attribute', () => {
      it('should fail on non number type', () => {
        expect(() => {
          compile({
            templateOptions: {
              type: 'text',
              min: 2
            },
            apiCheckFunction: 'throw'
          });
        }).toThrowError(Error, /min/i);
      });

      it('should be available on number type', () => {
        compile({
          templateOptions: {
            type: 'number',
            min: 2
          }
        });

        expect(parseInt(element.attr('min'), 10)).toEqual(field.templateOptions.min);
      });
    });

    describe('max attribute', () => {
      it('should fail on non number type', () => {
        expect(() => {
          compile({
            templateOptions: {
              type: 'text',
              max: 2
            },
            apiCheckFunction: 'throw'
          });
        }).toThrowError(Error, /max/i);
      });

      it('should be available on number type', () => {
        compile({
          templateOptions: {
            type: 'number',
            max: 2
          }
        });

        expect(parseInt(element.attr('max'), 10)).toEqual(field.templateOptions.max);
      });
    });
  });
});
