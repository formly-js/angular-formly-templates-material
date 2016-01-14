const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  Examples.set('input', 'types', {
    fields: [{
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text'
      }
    }]
  }, 'types/input.md');

  Menu.addChild('types', 'input');
}]);
