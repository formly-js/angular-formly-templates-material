const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    key: 'text-grow',
    type: 'textarea',
    templateOptions: {
      label: 'Growing textarea'
    }
  });

  fields.push({
    key: 'text-notgrow',
    type: 'textarea',
    templateOptions: {
      label: 'Not growing textarea',
      grow: false
    }
  });

  // set example
  Examples.set('textarea', {
    fields
  }, 'types/textarea.md');

  // add menu item to types
  Menu.addChild('types', 'textarea');
}]);
