const { Component, View, State } = angular2now;

@Component({
  selector: 'demo-index'
})
@View({
  templateUrl: 'client/components/demo-index/demo-index.html'
})
@State({
  name: 'demo.index',
  url: '/',
  defaultRoute: '/demo/'
})
class DemoIndexComponent {
  constructor() {
  }
}
