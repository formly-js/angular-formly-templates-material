const {
  SetModule, Component, View, State, bootstrap, options
} = angular2now;

options({
  controllerAs: 'vm'
});

SetModule('demo', [
  'angular-meteor',
  'ui.router',
  'formlyMaterial',
]);

@Component({
  'selector': 'demo'
})
@View({
  templateUrl: 'client/components/demo/demo.html'
})
@State({
  name: 'demo',
  url: '/demo',
  defaultRoute: true,
  html5Mode: true
})
class DemoComponent {
  constructor() {
    this.fields = [{
      type: 'datepicker',
      key: 'start',
      templateOptions: {
        placeholder: 'Start date'
      }
    }];
  }
}

bootstrap(DemoComponent);
