input
=====

md-input
--------

Example
-------

```javascript
{
  type: "input",
  key: "firstName",
  templateOptions: {
    type: "text",
    label: "First name",
    pattern: "[a-zA-Z]+"
    theme: "custom"
  }
}
```

### Configuration

#### templateOptions.type *: string*

#### templateOptions.label *: string*

#### templateOptions.theme *: string*

Value of md-theme directive

#### templateOptions.className _: string | expression | array_

#### templateOptions.disabled _: boolean_

#### templateOptions.step *: number*

only if templateOptions.type is 'number'

#### templateOptions.min *: number*

#### templateOptions.max *: number*

#### templateOptions.pattern *: string | RegExp*

Value of ng-pattern directive
