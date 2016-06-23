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
  const theme = 'custom';

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'input',
      templateOptions: {
        theme,
        disabled: true,
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

    it('should have proper theme when defined', () => {
      expect(element.parent().is(`.md-${theme}-theme`)).toBe(true);
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

  it('should be disabled', () => {
    const scope = element.scope();

    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(scope.options.templateOptions.disabled).toBe(true);
  });

  describe('pattern', () => {
    it('should accept string', () => {
      const pattern = '[a-z]+';

      compile({
        templateOptions: {
          pattern
        }
      });

      expect(element.attr('ng-pattern')).toEqual(field.templateOptions.pattern);
    });

    it('should accept RegExp', () => {
      const pattern = /[a-z]+/;

      compile({
        templateOptions: {
          pattern
        }
      });

      expect(element.attr('ng-pattern')).toEqual(`${field.templateOptions.pattern}`);
    });
  });

  describe('number type specific', () => {
    describe('step attribute', () => {
      // XXX BE instead of NOT BE because `step` attr is now fully supported
      // angular-formly#8042d2a
      it('should BE available on non number type', () => {
        compile({
          templateOptions: {
            type: 'text',
            step: 2
          }
        });

        expect(parseInt(element.attr('step'), 10)).toBe(field.templateOptions.step);
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
