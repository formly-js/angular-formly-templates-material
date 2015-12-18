import template from './switch.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'switch'
  });
};
