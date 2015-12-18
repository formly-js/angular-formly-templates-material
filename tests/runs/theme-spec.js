import testUtils from './../test-utils';

describe('formlyMaterial - theme manipulator', () => {
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
      type: 'switch',
      templateOptions: {
        theme: 'custom',
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

  it('should be able to add md-theme attribute', () => {
    compile();
    expect(element.attr('md-theme')).toBe('custom');
  });
});
