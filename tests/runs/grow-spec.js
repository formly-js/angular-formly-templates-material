import testUtils from './../test-utils';

describe('formlyMaterial - textarea no autogrow manipulator', () => {
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
      type: 'textarea',
      templateOptions: {
        label: 'test field',
        grow: false
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

  it('should be able to add md-no-autogrow attribute when grow equals false', () => {
    compile();
    expect(element.attr('md-no-autogrow')).toBeDefined();
  });

  it('should not add md-no-autogrow on non textarea type', () => {
    compile({
      type: 'input'
    });
    expect(element.attr('md-no-autogrow')).toBeUndefined();
  });
});
