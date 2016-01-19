const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    key: 'terms',
    type: 'checkbox',
    templateOptions: {
      label: 'Terms and Conditions'
    }
  });

  // set example
  Examples.set('checkbox', {
    fields
  }, 'types/checkbox.md');

  // add menu item to types
  Menu.addChild('types', 'checkbox');
}]);
