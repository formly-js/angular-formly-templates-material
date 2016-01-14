const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  Examples.set('textarea', 'types', {
    fields: [{
      key: 'text',
      type: 'textarea',
      templateOptions: {
        label: 'Text'
      }
    }]
  }, 'types/textarea.md');

  Menu.addChild('types', 'textarea');
}]);
