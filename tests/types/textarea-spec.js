import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - textarea type', () => {
  //
  // vars
  //

  let $compile;
  let $rootScope;
  let $scope;
  let form;
  let element;
  let elementScope;
  let field;
  const theme = 'custom';

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'textarea',
      templateOptions: {
        theme,
        label: 'test field',
        disabled: true,
        rows: 5,
        cols: 6
      }
    }, options)];

    form = $compile(testUtils.getFormTemplate())($scope);
    $scope.$digest();
    field = $scope.fields[0];
    element = form.find('[ng-model]');
    elementScope = element.scope();
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

    compile();
  });

  it('should be input element', () => {
    expect(element[0].nodeName).toBe('TEXTAREA');
  });

  it('should have messages wrapper', () => {
    expect(form.find('[ng-messages]').length).toBe(1);
  });

  it('should have label wrapper', () => {
    const label = form.find('label');

    expect(label.length).toBe(1);
    expect(label.html()).toContain(field.templateOptions.label);
  });

  it('should have proper theme when defined', () => {
    expect(element.parent().is(`.md-${theme}-theme`)).toBe(true);
  });

  it('should not auto grow', () => {
    expect(element.attr('md-no-autogrow')).toBeUndefined();
  });

  it('should be able to disable autogrowing', () => {
    compile({
      templateOptions: {
        grow: false
      }
    });
    expect(element.attr('md-no-autogrow')).toBeDefined();
  });

  it('should have inputContainer wrapper', () => {
    expect(form.find('md-input-container').length).toBe(1);
  });

  it('should be able to set rows', () => {
    expect(parseInt(element.attr('rows'), 10)).toEqual(field.templateOptions.rows);
  });

  it('should be able to set cols', () => {
    expect(parseInt(element.attr('cols'), 10)).toEqual(field.templateOptions.cols);
  });

  it('should be able to be disabled', () => {
    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(elementScope.options.templateOptions.disabled).toBe(true);
  });
});
