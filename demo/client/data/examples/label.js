const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    key: 'terms',
    type: 'switch',
    wrapper: ['label'],
    templateOptions: {
      label: 'Terms and conditions'
    }
  });

  // set example
  Examples.set('label', {
    fields
  }, 'wrappers/label.md');

  // add menu item to wrappers
  Menu.addChild('wrappers', 'label');
}]);
