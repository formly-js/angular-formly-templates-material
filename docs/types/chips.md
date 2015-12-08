# chips
## md-chips

### Example

```javascript
{
  "type": "chips",
  "key": "tags",
  "templateOptions": {
    "theme": "custom",
    "placeholder": "+tags",
    "secondaryPlaceholder": "Add tag",
    "deleteButtonLabel": "Remove",
    "deleteHint": "Remove tag"
  }
}
```

### Configuration

#### templateOptions.label _: string_

#### templateOptions.theme _: string_

#### templateOptions.placeholder _: string_
Placeholder text that will be forwarded to the input.

#### templateOptions.secondaryPlaceholder _: string_
Placeholder text that will be forwarded to the input, displayed when there is at least on item in the list.

#### templateOptions.deleteButtonLabel _: string_
A label for the delete button. Also hidden and read by screen readers.

#### templateOptions.deleteHint _: string_
A string read by screen readers instructing users that pressing the delete key will remove the chip.
