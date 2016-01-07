import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - label wrapper', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let element;
  let field;
  const color = 'rgb(117, 117, 117)';

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'checkbox',
      wrapper: ['label'],
      templateOptions: {
        label: 'test field'
      }
    }, options)];

    const form = $compile(testUtils.getFormTemplate())($scope);

    $scope.$digest();
    element = form.find('label');
    field = $scope.fields[0];
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

  it('should exist', () => {
    compile();
    expect(element.length).toBe(1);
  });

  it('should have proper value', () => {
    compile();
    expect(element.html()).toContain(field.templateOptions.label);
  });

  it('should be before the field', () => {
    compile();
    expect(element.find('md-checkbox').length).toBe(0);
    expect(element.next().children()[0].nodeName).toBe('MD-CHECKBOX');
  });

  it('should have styles added', () => {
    compile();
    expect(element.css('color')).toBe(color);
  });

  it('should not have styles added when used with input', () => {
    compile({
      type: 'input'
    });
    expect(element.css('color')).not.toBe(color);
  });

  it('should not have styles added when used with select', () => {
    compile({
      type: 'select',
      templateOptions: {
        options: [{
          name: 'foo',
          value: 'bar'
        }]
      }
    });
    expect(element.css('color')).not.toBe(color);
  });

  it('should not have styles added when used with textarea', () => {
    compile({
      type: 'textarea'
    });
    expect(element.css('color')).not.toBe(color);
  });
});
