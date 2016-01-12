# radio
## md-radio-group | md-radio-button

### Example

```javascript
{
  type: "radio",
  key: "name",
  templateOptions: {
    label: "Name",
    theme: "custom",
    labelProp: "firstName",
    valueProp: "id",
    options: [
        {firstName: "Sarah", id: 1},
        {firstName: "Jessica", id: 2},
        {firstName: "Parker", id: 3}
    ]
  }
}
```

### Configuration

#### templateOptions.label _: string_

#### templateOptions.theme _: string_

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.options _: array_

Array with available options

#### templateOptions.labelProp _: string (default: name)_

Name of property with option's label

#### templateOptions.valueProp _: string_

Name of property with option's value
