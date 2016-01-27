import template from './radio.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'radio',
    wrapper: ['label'],
    apiCheck: (check) => ({
      templateOptions: {
        options: check.arrayOf(check.object),
        labelProp: check.string.optional,
        valueProp: check.string.optional,
        theme: check.string.optional
      }
    })
  });
};
