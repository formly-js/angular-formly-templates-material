import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - className manipulator', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let element;
  let elementScope;

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'switch',
      templateOptions: {
        className: 'custom',
        label: 'test field'
      }
    }, options)];

    const form = $compile(angular.element(testUtils.getFormTemplate()))($scope);

    $scope.$digest();
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
  });

  it('should be able to add ng-class directive', () => {
    compile();
    expect(element.attr('ng-class')).toBe(`options.templateOptions['className']`);
  });

  it('should pass one class as a string', () => {
    compile();
    expect(elementScope.options.templateOptions.className).toBe('custom');
    expect(element.attr('class')).toContain('custom');
  });

  it('should pass few classes as an array', () => {
    const classes = ['foo', 'bar', 'baz'];

    compile({
      templateOptions: {
        className: classes
      }
    });

    expect(elementScope.options.templateOptions.className).toEqual(classes);

    classes.forEach((clss) => {
      expect(element.attr('class')).toContain(clss);
    });
  });
});
