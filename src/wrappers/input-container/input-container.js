import template from './input-container.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    template,
    name: 'inputContainer'
  });
};
