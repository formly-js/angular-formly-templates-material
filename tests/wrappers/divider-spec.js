import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - divider wrapper', () => {
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
      wrapper: ['divider']
    }, options)];

    const form = $compile(testUtils.getFormTemplate())($scope);
    $scope.$digest();
    element = form.find('md-divider');
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

  it('should be after the field by default', () => {
    compile();
    // not transcluded inner
    expect(element.find('md-checkbox').length).toBe(0);
    // checkbox transcluded before
    expect(element.prev('.ng-scope').children('md-checkbox').length).toBe(1);
  });

  it('should be before the field when divider option equals before', () => {
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
