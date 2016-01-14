const { Component, View } = angular2now;

@Component({
  selector: 'demo-view-form',
  bind: {
    fields: '=',
    model: '=?',
    options: '=?',
    form: '=?'
  }
})
@View({
  templateUrl: 'client/components/demo-view-form/demo-view-form.html'
})
class DemoViewFormComponent {
  constructor() {
  }
}
