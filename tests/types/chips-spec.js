import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - chips type', () => {
  //
  // vars
  //
  let $compile;
  let $rootScope;
  let $scope;
  let element;
  let field;
  let fieldScope;
  const theme = 'custom';

  function onAdd(/* $modelValue, $inputValue, scope, $event */) {
    return true;
  }

  function onRemove(/* $modelValue, $inputValue, scope, $event */) {
    return true;
  }

  function onSelect(/* $modelValue, $inputValue, scope, $event */) {
    return true;
  }
  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'chips',
      templateOptions: {
        onAdd,
        onRemove,
        onSelect,
        theme,
        label: 'test field',
        placeholder: '+tags',
        secondaryPlaceholder: 'Add tag',
        deleteButtonLabel: 'Remove',
        deleteHint: 'Remove tag',
        disabled: true
      }
    }, options)];

    const form = $compile(testUtils.getFormTemplate())($scope);

    $scope.$digest();
    field = $scope.fields[0];
    element = form.find('[ng-model]');
    fieldScope = angular.element(element).scope();
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
    expect(element[0].nodeName).toBe('MD-CHIPS');
  });

  it('should have placeholder', () => {
    expect(element.attr('placeholder')).toBe(field.templateOptions.placeholder);
  });

  it('should have proper theme when defined', () => {
    expect(element.is(`.md-${theme}-theme`)).toBe(true);
  });

  it('should have secondary placeholder', () => {
    expect(element.attr('secondary-placeholder')).toBe(field.templateOptions.secondaryPlaceholder);
  });

  it('should have delete button label', () => {
    expect(element.attr('delete-button-label')).toBe(field.templateOptions.deleteButtonLabel);
  });

  it('should have delete hint', () => {
    expect(element.attr('delete-hint')).toBe(field.templateOptions.deleteHint);
  });

  it('should have onAdd callback', () => {
    expect(element.attr('md-on-add')).toBe(`options.templateOptions['onAdd'](model[options.key], options, this, $event)`);
    expect(fieldScope.options.templateOptions.onAdd).toBe(onAdd);
  });

  it('should have onRemove callback', () => {
    expect(element.attr('md-on-remove')).toBe(`options.templateOptions['onRemove'](model[options.key], options, this, $event)`);
    expect(fieldScope.options.templateOptions.onRemove).toBe(onRemove);
  });

  it('should have onSelect callback', () => {
    expect(element.attr('md-on-select')).toBe(`options.templateOptions['onSelect'](model[options.key], options, this, $event)`);
    expect(fieldScope.options.templateOptions.onSelect).toBe(onSelect);
  });

  it('should be disabled and have readonly attribute', () => {
    expect(element[0].attributes.readonly.value).toBe('to.disabled');
    expect(fieldScope.options.templateOptions.disabled).toBe(true);
  });
});
