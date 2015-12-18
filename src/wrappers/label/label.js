import template from './label.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    template,
    name: 'label',
    apiCheck: (check) => ({
      templateOptions: {
        label: check.string
      }
    })
  });
};
