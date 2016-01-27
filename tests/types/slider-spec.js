import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - slider type', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let form;
  let element;
  let elementScope;
  const theme = 'custom';
  const fieldConfig = {
    key: 'testField',
    type: 'slider',
    templateOptions: {
      theme,
      label: 'test field',
      disabled: true,
      min: 1,
      max: 5,
      step: 0.5,
      discrete: true
    }
  };
  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, fieldConfig, options)];

    form = $compile(testUtils.getFormTemplate())($scope);
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

    compile();
  });

  it('should be md-slider element', () => {
    expect(element[0].nodeName).toBe('MD-SLIDER');
  });

  it('should have proper theme when defined', () => {
    expect(element.is(`.md-${theme}-theme`)).toBe(true);
  });

  it('should support min option', () => {
    expect(parseFloat(element.attr('min'))).toEqual(fieldConfig.templateOptions.min);
  });

  it('should support max option', () => {
    expect(parseFloat(element.attr('max'))).toEqual(fieldConfig.templateOptions.max);
  });

  it('should support step option', () => {
    expect(parseFloat(element.attr('step'))).toEqual(fieldConfig.templateOptions.step);
  });

  it('should support discrete option', () => {
    expect(element.attr('md-discrete')).toEqual(`options.templateOptions['discrete']`);
    expect(elementScope.options.templateOptions.discrete).toBe(fieldConfig.templateOptions.discrete);
  });

  it('should be able to be disabled', () => {
    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(elementScope.options.templateOptions.disabled).toBe(true);
  });
});
