describe('formlyMaterial', () => {
    //
    // vars
    //
    let formlyMaterial;
    let formlyMaterialPr;
    let prefix;

    //
    // tests
    //
    
    beforeEach(() => {
        angular.module('formlyMaterialMock', [])
            .config((formlyMaterialProvider) => {
                formlyMaterialPr = formlyMaterialProvider
            });
        module('formlyMaterial', 'formlyMaterialMock');

        angular.module('testApp', ['angular-meteor', 'formly', 'formlyMaterial', 'ngMock']);
        module('testApp');

        inject(function ($templateCache, $httpBackend, _formlyMaterial_) {
            $httpBackend.whenGET(/\.html$/i).respond((method, url) => $templateCache.get(url));
            formlyMaterial = _formlyMaterial_;
        });

        if (meteorVersionCompare.lt('1.2')) {
            prefix = "/packages/wieldo_angular-formly-templates-material_";
        } else {
            prefix = "/packages/wieldo:angular-formly-templates-material/";
        }
    });

    it("should be injectable", () => {
        expect(formlyMaterial).toBeDefined();
    });

    it("should be able to add prefix to templateUrl using factory", () => {
        expect(formlyMaterial.templateUrl("client/test.html")).toBe(prefix + "client/test.html");
        expect(formlyMaterial.templateUrl("/client/test.html")).toBe(prefix + "client/test.html");
        expect(formlyMaterial.templateUrl("/client/test/test.html")).toBe(prefix + "client/test/test.html");
    });

    it("should be able to add prefix to templateUrl using provider", () => {
        expect(formlyMaterialPr.templateUrl("client/test.html")).toBe(prefix + "client/test.html");
        expect(formlyMaterialPr.templateUrl("/client/test.html")).toBe(prefix + "client/test.html");
        expect(formlyMaterialPr.templateUrl("/client/test/test.html")).toBe(prefix + "client/test/test.html");
    });

});
