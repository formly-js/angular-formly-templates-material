const { SetModule, Service } = angular2now;

SetModule('demo');

@Service({
  name: 'Examples'
})
class Examples {
  constructor() {
    this.examples = new Map();
  }

  /**
   * Add example
   *
   * @param {String} id
   * @param {String} section
   * @param {Object}
   */
  set(id, section, { fields, model, options }, api) {
    const docs = 'https://github.com/formly-js/angular-formly-templates-material/blob/master/docs/';

    this.examples.set(id, {
      section,
      api: (typeof api === 'string' && !api.match('^http')) ? docs + api : api,
      formly: {
        fields,
        model,
        options
      }
    });
  }

  get(id) {
    return this.examples.get(id);
  }
}
