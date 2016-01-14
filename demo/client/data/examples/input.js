const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  // set example
  Examples.set('input', {
    fields: [{
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text'
      }
    }]
  }, 'types/input.md');

  // add menu item to types
  Menu.addChild('types', 'input');
}]);
