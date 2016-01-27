import { ngModelAttrsTransformer } from './../helpers';

export default (formlyConfigProvider) => {
  // add only step attribute because min and max are both built-in
  formlyConfigProvider.extras.fieldTransform.push((fields) => {
    return ngModelAttrsTransformer(fields, (field) => (
      field.templateOptions && typeof field.templateOptions.className !== 'undefined'
    ), 'className', {
      bound: 'ng-class'
    });
  });
};
