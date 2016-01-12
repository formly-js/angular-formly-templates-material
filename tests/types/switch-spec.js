import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - switch type', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let element;
  let elementScope;
  let field;

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'switch',
      templateOptions: {
        label: 'test field',
        disabled: true
      }
    }, options)];

    const form = $compile(testUtils.getFormTemplate())($scope);

    $scope.$digest();
    element = form.find('[ng-model]');
    elementScope = element.scope();
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

    compile();
  });

  it('should be md-switch element', () => {
    expect(element[0].nodeName).toBe('MD-SWITCH');
  });

  it('should have label', () => {
    expect(element.find('.md-label > span').html()).toContain(field.templateOptions.label);
  });

  it('should be able to be disabled', () => {
    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(elementScope.options.templateOptions.disabled).toBe(true);
  });
});
