# Text Field

Text fields let users enter and edit text.

### Examples

```.jsx
<>
  <TextField
    label="Label text"
    onChange={(e) => console.log(e.target.value)}
    placeholder="This is a placeholder"
    defaultValue="Initial value"
  />
  <TextField
    label="Has error"
    hasError
    onChange={(e) => console.log(e.target.value)}
    placeholder="This is a placeholder"
    error="This field is required"
  />
  <TextField
    label="Extra top"
    extraTop={`${location.hostname}/page/`}
  />
  <TextField
    label="Extra left"
    extraLeft="£"
    error="This field has an error 🙁"
  />
  <TextField
    label="Extra right"
    extraRight={<Icon color="primary" name="search"/>}
  />
  <TextField
    label="Extra bottom"
    extraBottom="Extra stuff here"
  />
</>
```

## Props

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| disabled | boolean | | false | Applies disabled attribute to HTML input |
| extraTop | String | |  | Displayed on top of the input |
| extraRight | String | |  | Displayed inline after the input |
| extraBottom | String | |  | Displayed under the input |
| extraleft | String | |  | Displayed inline before the input |
| hasError | boolean | |  | Applies error styling to input |
| onChange | Function | |  | Callback function called on input change|
| value | String | | | Value to be returned and used as label if label prop is not supplied |

## Accessibility

extra text will not be read out by a screen reader in form mode. The content could be preppended to the label text and added as an aria-label to help accessibility.
