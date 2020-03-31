# Custom Fields

Custom fields provide wrappers for html form elements so you can then style them using classic CSS.

## Available elements :
`<input type="number">`

## How to use
```js

import CustomFields from 'custom-fields'

new CustomFields('input[type="number"]')

```

## Input Number
```html
<!-- Before -->
<input type="number" name="age" value="0" step="1">

<!-- After -->
<div class="custom-element custom-input-number">
    <input type="number" name="age" value="0" step="1">
    <div class="controls">
        <i class="up"></i>
        <i class="down"></i>
    </div>
</div>
```
