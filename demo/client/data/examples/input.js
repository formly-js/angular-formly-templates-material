const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Name',
      pattern: '[a-zA-Z]+'
    },
    validation: {
      messages: {
        pattern: () => 'a-zA-Z only'
      }
    }
  });

  fields.push({
    key: 'sum',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'Sum',
      step: 0.5,
      min: 0,
      max: 10
    },
    validation: {
      messages: {
        max: () => '10 is max',
        min: () => '0 is min',
        number: () => 'Invalid format'
      }
    }
  });

  // set example
  Examples.set('input', {
    fields
  }, 'types/input.md');

  // add menu item to types
  Menu.addChild('types', 'input');
}]);
