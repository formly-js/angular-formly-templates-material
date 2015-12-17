import template from './chips.html';

export default (formlyConfigProvider) => {
  formlyConfigProvider.setType({
    name: 'chips',
    template: template,
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
        onRemove: check.func.optional
      }
    })
  });
}
