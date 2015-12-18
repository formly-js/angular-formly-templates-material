import testUtils from './../test-utils';

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
  let field;

  //
  // helpers
  //

  function compile(options) {
    $scope = $rootScope.$new();
    $scope.fields = [angular.merge({}, {
      key: 'testField',
      type: 'select',
      templateOptions: {
        label: 'test field',
        multiple: true,
        onClose: () => true,
        onOpen: () => true,
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
  }

  function waitForSelectOpen() {
    $material.flushInterimElement();
  }

  function openSelect() {
    element.triggerHandler('click');
  }

  function closeSelect() {
    $document.find('md-select-menu').parent().remove();
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

  it('should be able to bind md-on-close', () => {
    compile();
    expect(element.attr('md-on-close')).toBe(`options.templateOptions['onClose']`);
  });

  it('should be able to bind md-on-open', () => {
    compile();
    expect(element.attr('md-on-open')).toBe(`options.templateOptions['onOpen']`);
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
