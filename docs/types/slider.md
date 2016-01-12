# slider
## md-slider

### Example

```javascript
{
    type: "slider",
    key: "rate",
    templateOptions: {
        theme: "custom",
        min: 1,
        max: 5,
        step: 0.5,
        discrete: true
    }
}
```

### Configuration

#### templateOptions.label _: string_

#### templateOptions.theme _: string_

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.min _: number (default: 0)_
The minimum value the user is allowed to pick.

#### templateOptions.max _: number (default: 100)_
The maximum value the user is allowed to pick.

#### templateOptions.step _: number (default: 1)_
The distance between values the user is allowed to pick.

#### templateOptions.discrete _: boolean (default: false)_
Whether to enable discrete mode
