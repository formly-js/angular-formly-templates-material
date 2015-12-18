import testUtils from './../test-utils';

describe('formlyMaterial - messages wrapper', () => {
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

  function compile() {
    $scope = $rootScope.$new();
    $scope.fields = [{
      key: 'testField',
      type: 'checkbox',
      wrapper: ['messages'],
      templateOptions: {
        label: 'test field'
      }
    }];

    const form = $compile(testUtils.getFormTemplate())($scope);

    $scope.$digest();
    element = form.find('[ng-messages]');
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

  it('should exist', () => {
    expect(element.length).toBe(1);
  });

  it('should be after the field', () => {
    expect(element.find('md-checkbox').length).toBe(0);
    expect(element.prev('.ng-scope').children('md-checkbox').length).toBe(1);
  });
});
