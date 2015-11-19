testUtils = class testUtils {
    static fixTypeTemplateUrl(formlyConfig, typeName) {
        let type = formlyConfig.getType(typeName, true);
        type.templateUrl = type.templateUrl.replace(
            "/packages/wieldo:angular-formly-templates-material/lib/",
            "wieldo_angular-formly-templates-material_lib/"
        );
    }

    static fixWrapperTemplateUrl(formlyConfig, wrapperName) {
        let wrapper = formlyConfig.getWrapper(wrapperName, true);
        wrapper.templateUrl = wrapper.templateUrl.replace(
            "/packages/wieldo:angular-formly-templates-material/lib/",
            "wieldo_angular-formly-templates-material_lib/"
        );
    }

    static fixFieldsTypes(formlyConfig, fields) {
        fields.forEach((field) => {
            testUtils.fixTypeTemplateUrl(formlyConfig, field.type);
        });
    }

    static formTemplate = `<form name="testForm"><formly-form fields="fields" form="testForm"></formly-form></form>`;
};