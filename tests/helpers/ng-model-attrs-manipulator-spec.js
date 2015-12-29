import {
  ngModelAttrsManipulator
}
from './../../src/helpers';

import angular from 'angular';

describe('formlyMaterial - ngModelAttrsManipulator', () => {
  it('should skip on skipNgModelAttrsManipulator', () => {
    const tpl = 'test';
    const result = ngModelAttrsManipulator(tpl, {
      extras: {
        skipNgModelAttrsManipulator: true
      }
    });

    expect(result).toBe(tpl);
  });

  it('should not modify on missing ngModel', () => {
    const tpl = 'test';
    const result = ngModelAttrsManipulator(tpl, {});

    expect(result).toBe(tpl);
  });

  it('should add attribute with value to ngModel', () => {
    const tpl = `<div><input ng-model='baz'/></div>`;
    const attr = {
      name: 'foo',
      value: 'bar'
    };
    const result = ngModelAttrsManipulator(tpl, {}, attr.name, attr.value);
    const element = angular.element(result);

    expect(result).not.toBe(tpl);
    expect(element.find('[ng-model]').attr(attr.name)).toBe(attr.value);
  });

  it('should add attribute with value to few elements with ngModel', () => {
    const tpl = `<div><input ng-model='baz1'/><input ng-model='baz2'/></div>`;
    const attr = {
      name: 'foo',
      value: 'bar'
    };
    const result = ngModelAttrsManipulator(tpl, {}, attr.name, attr.value);
    const element = angular.element(result);

    expect(result).not.toBe(tpl);
    expect(element.find('[ng-model]').length).toBe(2);
    expect(element.find('[ng-model]:eq(0)').attr(attr.name)).toBe(attr.value);
    expect(element.find('[ng-model]:eq(1)').attr(attr.name)).toBe(attr.value);
  });

  it('should not overwrite attribute on ngModel', () => {
    const name = 'baz';
    const tpl = `<div><input ng-model='${name}' foo='${name}'/></div>`;
    const attr = {
      name: 'foo',
      value: 'bar'
    };
    const result = ngModelAttrsManipulator(tpl, {}, attr.name, attr.value);
    const element = angular.element(result);

    expect(result).not.toBe(tpl);
    expect(element.find('[ng-model]').attr(attr.name)).toBe(name);
  });
});
