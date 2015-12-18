import template from './messages.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    template,
    name: 'messages'
  });
};
