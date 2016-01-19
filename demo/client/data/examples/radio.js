const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    type: 'radio',
    key: 'name',
    templateOptions: {
      label: 'Name',
      labelProp: 'firstName',
      valueProp: 'id',
      options: [
        {
          firstName: 'Sarah',
          id: 1
        },
        {
          firstName: 'Jessica',
          id: 2
        },
        {
          firstName: 'Parker',
          id: 3
        }
      ]
    }
  });

  // set example
  Examples.set('radio', {
    fields
  }, 'types/radio.md');

  // add menu item to types
  Menu.addChild('types', 'radio');
}]);
