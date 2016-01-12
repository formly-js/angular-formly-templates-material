select
======

md-select
---------

### Example

```javascript
{
  type: "select",
  key: "name",
  templateOptions: {
    label: "Name",
    theme: "custom",
    multiple: true,
    labelProp: "firstName",
    valueProp: "id",
    options: [
        {firstName: "Sarah", id: 1},
        {firstName: "Jessica", id: 2},
        {firstName: "Parker", id: 3}
    ],
    onOpen: () => {
      console.log('select is opened');
    },
    onClose: () => {
      console.log('select is closed');
    }
  }
}
```

### Configuration

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.options *: array*

Array with available options

#### templateOptions.labelProp *: string (default: name)*

Name of property with option's label

#### templateOptions.valueProp *: string*

Name of property with option's value

#### templateOptions.multiple *: boolean*

Multiple choice

#### templateOptions.onOpen *: function*

Bound to md-on-open.

Expression to be evaluated when the select is opened.

If expression returns a promise, it will display a loading indicator while it is being resolved.

#### templateOptions.onClose *: function*

Bound to md-on-close.

Expression to be evaluated when the select is closed.
