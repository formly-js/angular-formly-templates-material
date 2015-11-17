describe('formlyMaterial', () => {
    //
    // vars
    //
    let formlyMaterial;
    let formlyMaterialPr;

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
    });

    it("should be injectable", () => {
        expect(formlyMaterial).toBeDefined();
    });

    it("should be able to add prefix to templateUrl using factory", () => {
        const prefix = "/packages/wieldo:angular-formly-templates-material/";

        expect(formlyMaterial.templateUrl("test.html")).toBe(prefix + "test.html");
        expect(formlyMaterial.templateUrl("/test.html")).toBe(prefix + "test.html");
        expect(formlyMaterial.templateUrl("/test/test.html")).toBe(prefix + "test/test.html");
    });

    it("should be able to add prefix to templateUrl using provider", () => {
        const prefix = "/packages/wieldo:angular-formly-templates-material/";

        expect(formlyMaterialPr.templateUrl("test.html")).toBe(prefix + "test.html");
        expect(formlyMaterialPr.templateUrl("/test.html")).toBe(prefix + "test.html");
        expect(formlyMaterialPr.templateUrl("/test/test.html")).toBe(prefix + "test/test.html");
    });

});
