const { Component, View, State, Inject } = angular2now;

@Component({
  selector: 'demo-view'
})
@View({
  templateUrl: 'client/components/demo-view/demo-view.html'
})
@State({
  name: 'demo.view',
  url: '/{id:[a-z\-]+}'
})
@Inject(['$stateParams', 'Examples'])
class DemoViewComponent {
  constructor($stateParams, Examples) {
    this.id = $stateParams.id;
    this.Examples = Examples;

    const example = Examples.get(this.id);

    if (example) {
      this.fields = angular.copy(example.formly.fields);
      this.model = angular.copy(example.formly.model) || {};
      this.options = angular.copy(example.formly.options) || {};
      this.api = example.api;
    }
  }
}
