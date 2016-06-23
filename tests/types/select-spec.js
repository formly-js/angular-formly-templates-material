import testUtils from './../test-utils';
import angular from 'angular';

describe('formlyMaterial - select type', () => {
  //
  // vars
  //

  let $compile;
  let $rootScope;
  let $scope;
  let $document;
  let $material;
  let form;
  let element;
  let elementScope;
  let field;
  const theme = 'custom';

  function onClose(/* $modelValue, $inputValue, scope, $event */) {
    return true;
  }

  function onOpen(/* $modelValue, $inputValue, scope, $event */) {
    return true;
  }
  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'select',
      templateOptions: {
        theme,
        label: 'test field',
        multiple: true,
        onClose,
        onOpen,
        options: [{
          name: 'first',
          nameUp: 'FIRST',
          value: 'f',
          valueUp: 'F'
        }, {
          name: 'second',
          nameUp: 'SECOND',
          value: 's',
          valueUp: 'S'
        }]
      }
    }, options)];

    form = $compile(testUtils.getFormTemplate())($scope);
    $scope.$digest();
    field = $scope.fields[0];
    element = form.find('[ng-model]');
    elementScope = element.scope();
  }

  function waitForSelectOpen() {
    $material.flushInterimElement();
  }

  function openSelect() {
    element.triggerHandler('click');
  }

  function closeSelect() {
    $document.find('md-select-menu').parent().remove();
    $document.find('body').attr('style', '');
    $document.find('md-backdrop').remove();
  }

  function selectOptions() {
    openSelect();
    waitForSelectOpen();
    const selectMenu = $document.find('md-select-menu');

    selectMenu.hide();
    $document.find('.md-scroll-mask').remove();
    return selectMenu.find('md-option');
  }

  //
  // tests
  //

  beforeEach(() => {
    window.angular.module('testMod', ['formlyMaterial', 'ngMaterial-mock']);
    window.module('testMod');

    inject((_$compile_, _$rootScope_, _$document_, _$material_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $document = _$document_;
      $material = _$material_;
    });
  });

  it('should be md-select element', () => {
    compile();
    expect(element[0].nodeName).toBe('MD-SELECT');
  });

  it('should be able to pick multiple options', () => {
    compile();
    expect(element.attr('multiple')).toBeDefined();
  });

  it('should have proper theme when defined', () => {
    compile();
    expect(element.is(`.md-${theme}-theme`)).toBe(true);
  });

  it('should not add multiple directive when does not equal true', () => {
    compile({
      templateOptions: {
        multiple: false
      }
    });
    expect(element.attr('multiple')).toBeUndefined();
  });

  it('should be able to bind md-on-close', () => {
    compile();
    expect(element.attr('md-on-close')).toBe(`options.templateOptions['onClose'](model[options.key], options, this, $event)`);
    expect(elementScope.options.templateOptions.onClose).toBe(onClose);
  });

  it('should be able to bind md-on-open', () => {
    compile();
    expect(element.attr('md-on-open')).toBe(`options.templateOptions['onOpen'](model[options.key], options, this, $event)`);
    expect(elementScope.options.templateOptions.onOpen).toBe(onOpen);
  });

  it('should be able to be disabled', () => {
    compile({
      templateOptions: {
        disabled: true
      }
    });

    expect(element.attr('ng-disabled')).toBe(`options.templateOptions['disabled']`);
    expect(elementScope.options.templateOptions.disabled).toBe(true);
  });

  describe('check options', () => {
    afterEach(() => {
      closeSelect();
    });

    it('should have options with default properties for name and value', () => {
      compile();
      const optionsEl = selectOptions();

      expect(optionsEl.length).toBe(field.templateOptions.options.length);
      field.templateOptions.options.forEach((option, key) => {
        const el = angular.element(optionsEl[key]);

        expect(el.attr('value')).toBe(option.value);
        expect(el.find('.md-text').html()).toContain(option.name);
      });
    });

    it('should have options with custom properties for name and value', () => {
      compile({
        templateOptions: {
          labelProp: 'nameUp',
          valueProp: 'valueUp'
        }
      });
      const optionsEl = selectOptions();

      expect(optionsEl.length).toBe(field.templateOptions.options.length);
      field.templateOptions.options.forEach((option, key) => {
        const el = angular.element(optionsEl[key]);

        expect(el.attr('value')).toBe(option.valueUp);
        expect(el.find('.md-text').html()).toContain(option.nameUp);
      });
    });
  });
});
