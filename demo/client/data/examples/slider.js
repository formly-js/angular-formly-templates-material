const { SetModule } = angular2now;

SetModule('demo').run(['Examples', 'Menu', (Examples, Menu) => {
  const fields = [];

  fields.push({
    type: 'slider',
    key: 'rate-discrete',
    templateOptions: {
      label: 'Rate (with discrete)',
      min: 1,
      max: 5,
      step: 0.5,
      discrete: true
    }
  });

  fields.push({
    type: 'slider',
    key: 'rate',
    templateOptions: {
      label: 'Rate',
      min: 1,
      max: 5,
      step: 0.5
    }
  });

  // set example
  Examples.set('slider', {
    fields
  }, 'types/slider.md');

  // add menu item to types
  Menu.addChild('types', 'slider');
}]);
