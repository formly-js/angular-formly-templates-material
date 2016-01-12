# datepicker
## md-datepicker

### Example

```javascript
{
  type: "datepicker",
  key: "start",
  templateOptions: {
    theme: "custom",
    placeholder: "Start date",
    minDate: minDate, // instance of Date
    maxDate: maxDate, // instance of Date
    filterDate: function(date) {
        // only weekends
        var day = date.getDay();
        return day === 0 || day === 6;
    }
  }
}
```

### Configuration

#### templateOptions.label _: string_

#### templateOptions.theme _: string_

#### templateOptions.disabled _: boolean_

#### templateOptions.className _: string | expression | array_

#### templateOptions.placeholder _: string_
The date input placeholder value

#### templateOptions.minDate _: Date_
Min date of choice

#### templateOptions.maxDate _: Date_
Max date of choice

#### templateOptions.filterDate _: function_
Function expecting a date and returning a boolean whether it can be selected or not.
