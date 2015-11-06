var {SetModule} = angular2now;

SetModule('formlyMaterial', [
    'ngMessages',
    'ngMaterial',
    'formly'
])
    .provider('formlyMaterial', formlyMaterial);

function formlyMaterial() {
    var self = this;

    this.templateUrl = function (templateUrl) {
        return 'mys_angular-formly-templates-material_' + templateUrl.replace(/^\//, "");
    };

    this.$get = function () {
        return {
            templateUrl: self.templateUrl
        }
    };
}