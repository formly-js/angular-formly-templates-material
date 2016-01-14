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
   * Add new example
   *
   * @param {String} id  unique value for state `id` parameter
   * @param {Object} options  formly configuration
   * @param {String} api  it can be an absolute url or just `types/input.md` (see docs local variable)
   */
  set(id, { fields, model, options }, api) {
    const docs = 'https://github.com/formly-js/angular-formly-templates-material/blob/master/docs/';

    this.examples.set(id, {
      api: (typeof api === 'string' && !api.match('^http')) ? docs + api : api,
      formly: {
        fields,
        model,
        options
      }
    });
  }

  /**
   * Get example
   *
   * @param  {String} id example's identifier
   * @return {Object}    example's data with API url and formly configuration
   */
  get(id) {
    return this.examples.get(id);
  }
}
