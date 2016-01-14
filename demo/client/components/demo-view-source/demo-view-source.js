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

    this.add(this.fieldsInits, 'Initial fields');
    this.add(this.fields, 'Fields');
    this.add(this.model, 'Model');
    this.add(this.form, 'Form');
    this.add(this.options, 'Options');
  }

  add(source, label) {
    this.sources.push({
      label,
      source
    });
  }
}
