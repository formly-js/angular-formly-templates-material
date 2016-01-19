const { Component, View } = angular2now;

@Component({
  selector: 'demo-view-source',
  bind: {
    fields: '=',
    model: '=?',
    options: '=?',
    form: '=?'
  }
})
@View({
  templateUrl: 'client/components/demo-view-source/demo-view-source.html'
})
class DemoViewSourceComponent {
  constructor() {
    this.sources = [];
    // make copy of fields
    this.fieldsInits = angular.copy(this.fields);

    this.add('fieldsInits', 'Initial fields');
    this.add('fields', 'Fields');
    this.add('model', 'Model');
    this.add('form', 'Form');
    this.add('options', 'Options');
  }

  add(key, label) {
    this.sources.push({
      label,
      key
    });
  }
}
