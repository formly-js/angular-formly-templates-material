import template from './chips.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    template,
    name: 'chips',
    wrapper: ['label'],
    defaultOptions: {
      defaultValue: [],
      ngModelAttrs: {
        placeholder: {
          attribute: 'placeholder'
        },
        secondaryPlaceholder: {
          attribute: 'secondary-placeholder'
        },
        deleteButtonLabel: {
          attribute: 'delete-button-label'
        },
        deleteHint: {
          attribute: 'delete-hint'
        },
        onAdd: {
          bound: 'md-on-add'
        },
        onRemove: {
          bound: 'md-on-remove'
        },
        onSelect: {
          bound: 'md-on-select'
        }
      }
    },
    apiCheck: (check) => ({
      templateOptions: {
        placeholder: check.string.optional,
        secondaryPlaceholder: check.string.optional,
        deleteButtonLabel: check.string.optional,
        deleteHint: check.string.optional,
        onAdd: check.func.optional,
        onRemove: check.func.optional,
        onSelect: check.func.optional,
        theme: check.string.optional
      }
    })
  });
};
