const { SetModule, Service, Inject } = angular2now;

SetModule('demo');

@Service({
  name: 'Codepen'
})
@Inject(['$document'])
class Codepen {
  constructor($document, Examples) {
    this.$document = $document;
    this.Examples = Examples;
    this.address = 'http://codepen.io/pen/define/';
  }

  open(exampleId) {
    // const data = codepenDataAdapter.translate(demo, $demoAngularScripts.all());
    // const example = this.Examples.get(exampleId);
    const data = {
      css_external: [
        '//npmcdn.com/angular-material@1.0.0/angular-material.min.css'
      ].join(';'),
      js_external: [
        '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js',
        '//npmcdn.com/angular-animate@1.4.8/angular-animate.min.js',
        '//npmcdn.com/angular-aria@1.4.8/angular-aria.min.js',
        '//npmcdn.com/angular-material@latest/angular-material.min.js',
        '//npmcdn.com/angular-messages@1.4.8/angular-messages.min.js',
        '//npmcdn.com/api-check@latest/dist/api-check.js',
        '//npmcdn.com/angular-formly@latest/dist/formly.js',
        '//npmcdn.com/angular-formly-material@latest/dist/formly-material.js'
      ].join(';'),
      html: this._getHTML().trim()
    };
    const form = this._buildForm(data);

    this.$document.find('body').append(form);
    form[0].submit();
    form.remove();
  }

  _buildForm(data) {
    const form = angular.element(
      `<form style="display: none;" method="post" target="_blank" action="${this.address}"></form>`
    );
    const input = `<input type="hidden" name="data" value="${this._escapeJsonQuotes(data)}" />`;
    form.append(input);
    return form;
  }

  _escapeJsonQuotes(json) {
    return JSON.stringify(json)
      .replace(/'/g, '&amp;apos;')
      .replace(/"/g, '&amp;quot;');
  }

  _getHTML() {
    return `
      <div ng-controller="DemoCtrl as vm" ng-cloak="" ng-app="demo">
        <form flex name="vm.form" ng-submit="vm.submit()">
          <formly-form fields="vm.fields" model="vm.model" form="vm.form" options="vm.options">
            <md-button type="submit" class="md-primary">Submit</md-button>
          </formly-form>
        </form>
      </div>
    `;
  }

  _getJS() {
    return `
      (function () {
        'use strict';
        angular
            .module('demo', ['formlyMaterial'])
            .controller('DemoCtrl', DemoCtrl);

        function DemoCtrl () {
          var self = this;

          self.fields = ::field;
          self.model = ::model;
          self.form = ::form;
          self.options = ::options;
          self.submit = function() {}
        }
      })();
    `;
  }
}
