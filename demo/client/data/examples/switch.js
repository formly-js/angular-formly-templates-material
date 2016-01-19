const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    type: 'switch',
    key: 'terms',
    templateOptions: {
      label: 'Terms and conditions'
    }
  });

  // set example
  Examples.set('switch', {
    fields
  }, 'types/switch.md');

  // add menu item to types
  Menu.addChild('types', 'switch');
}]);
