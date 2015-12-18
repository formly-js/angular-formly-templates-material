import template from './checkbox.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'checkbox'
  });
};
