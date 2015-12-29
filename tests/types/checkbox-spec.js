import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - checkbox type', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let element;

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'checkbox',
      templateOptions: {
        label: 'test field'
      }
    }, options)];

    const form = $compile(testUtils.getFormTemplate())($scope);

    $scope.$digest();
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

    compile();
  });

  it('should be md-checkbox element', () => {
    expect(element[0].nodeName).toBe('MD-CHECKBOX');
  });

  it('should have label', () => {
    expect(element.html()).toContain('test field');
  });
});
