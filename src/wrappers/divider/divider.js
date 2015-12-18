import template from './divider.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setWrapper({
    template,
    name: 'divider',
    apiCheck: (check) => ({
      templateOptions: {
        divider: check.oneOf(['before', 'after']).optional
      }
    })
  });
};
