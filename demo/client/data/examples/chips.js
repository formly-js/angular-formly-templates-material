const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    type: 'chips',
    key: 'tags',
    templateOptions: {
      placeholder: '+tags',
      secondaryPlaceholder: 'Add tag',
      deleteButtonLabel: 'Remove',
      deleteHint: 'Remove tag'
    }
  });

  // set example
  Examples.set('chips', {
    fields
  }, 'types/chips.md');

  // add menu item to types
  Menu.addChild('types', 'chips');
}]);
