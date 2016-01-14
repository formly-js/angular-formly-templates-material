const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  // set example
  Examples.set('textarea', {
    fields: [{
      key: 'text',
      type: 'textarea',
      templateOptions: {
        label: 'Text'
      }
    }]
  }, 'types/textarea.md');

  // add menu item to types
  Menu.addChild('types', 'textarea');
}]);
