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
    deleteHint: "Remove tag",
    onAdd: function() {
      console.log('new chip');
    },
    onRemove: function() {
      console.log('chip removed');
    }
  }
}
```

### Configuration

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.placeholder *: string*

Placeholder text that will be forwarded to the input.

#### templateOptions.secondaryPlaceholder *: string*

Placeholder text that will be forwarded to the input, displayed when there is at least on item in the list.

#### templateOptions.deleteButtonLabel *: string*

A label for the delete button. Also hidden and read by screen readers.

#### templateOptions.deleteHint *: string*

A string read by screen readers instructing users that pressing the delete key will remove the chip.

#### templateOptions.onAdd *: function*

An expression which will be called when a chip has been added.

#### templateOptions.onRemove *: function*

An expression which will be called when a chip has been removed.

#### templateOptions.onSelect *: function*

An expression which will be called when a chip has been selected.
