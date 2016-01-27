import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - datepicker type', () => {
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
  const minDate = new Date(2015, 10, 19);
  const maxDate = new Date(2015, 11, 20);
  const filterDate = () => true;

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'datepicker',
      templateOptions: {
        minDate,
        maxDate,
        filterDate,
        theme,
        disabled: true,
        label: 'test field',
        placeholder: 'Pick a date'
      }
    }, options)];

    form = $compile(testUtils.getFormTemplate())($scope);
    $scope.$digest();
    element = form.find('[ng-model]');
    elementScope = angular.element(element).scope();
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

  it('should be md-chips element', () => {
    expect(element[0].nodeName).toBe('MD-DATEPICKER');
  });

  it('should have messages', () => {
    expect(form.find('[ng-messages]').length).toBe(1);
  });

  it('should have proper theme when defined', () => {
    expect(element.attr('md-theme')).toBe(theme);
  });

  it('should have min date', () => {
    expect(element.attr('md-min-date')).toBe(`options.templateOptions['minDate']`);
    expect(elementScope.options.templateOptions.minDate.toDateString()).toBe(minDate.toDateString());
  });

  it('should have max date', () => {
    expect(element.attr('md-max-date')).toBe(`options.templateOptions['maxDate']`);
    expect(elementScope.options.templateOptions.maxDate.toDateString()).toBe(maxDate.toDateString());
  });

  it('should have date filter', () => {
    expect(element.attr('md-date-filter')).toBe(`options.templateOptions['filterDate']`);
    expect(elementScope.options.templateOptions.filterDate).toBe(filterDate);
  });

  it('should be disabled', () => {
    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(elementScope.options.templateOptions.disabled).toBe(true);
  });
});
