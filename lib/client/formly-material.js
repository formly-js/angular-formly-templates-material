var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .provider('formlyMaterial', [formlyMaterial]);

function formlyMaterial() {
    var self = this;

    this.templateUrl = function (templateUrl) {
        return angularTemplateUrl('wieldo:angular-formly-templates-material', templateUrl);
    };

    this.$get = function () {
        return {
            templateUrl: self.templateUrl
        }
    };
}