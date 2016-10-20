textarea
========

textarea
--------

### Example

```javascript
{
  type: "textarea",
  key: "bio",
  templateOptions: {
    label: "Biography",
    theme: "custom",
    rows: 5,
    grow: false
  }
}
```

#### Configuration

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.maxlength *: integer*

The maximum number of characters allowed in this input. If this is specified, a character counter will be shown underneath the input.
Equivalent to md-maxlength

#### templateOptions.rows *: integer*

Number of rows

#### templateOptions.grow *: boolean (default true)*

Equivalent to md-no-autogrow

When present, textareas will not grow automatically.
