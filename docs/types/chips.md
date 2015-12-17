chips
=====

md-chips
--------

### Example

```javascript
{
  type: "chips",
  key: "tags",
  templateOptions: {
    theme: "custom",
    placeholder: "+tags",
    secondaryPlaceholder: "Add tag",
    deleteButtonLabel: "Remove",
    deleteHint: "Remove tag"
  }
}
```

### Configuration

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

#### templateOptions.placeholder *: string*

Placeholder text that will be forwarded to the input.

#### templateOptions.secondaryPlaceholder *: string*

Placeholder text that will be forwarded to the input, displayed when there is at least on item in the list.

#### templateOptions.deleteButtonLabel *: string*

A label for the delete button. Also hidden and read by screen readers.

#### templateOptions.deleteHint *: string*

A string read by screen readers instructing users that pressing the delete key will remove the chip.
