const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    key: 'terms1',
    type: 'switch',
    wrapper: ['divider'],
    templateOptions: {
      label: 'Terms #1'
    }
  });

  fields.push({
    key: 'terms2',
    type: 'switch',
    wrapper: ['divider'],
    templateOptions: {
      label: 'Terms #2'
    }
  });

  fields.push({
    key: 'terms3',
    type: 'switch',
    templateOptions: {
      label: 'Terms #3'
    }
  });

  // set example
  Examples.set('divider', {
    fields,
    model: {
      terms2: true
    },
  }, 'wrappers/divider.md');

  // add menu item to wrappers
  Menu.addChild('wrappers', 'divider');
}]);
