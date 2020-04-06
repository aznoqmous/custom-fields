# CustomFields

`CustomFields` provide wrappers for html form elements so you can then style them using classic CSS.

- provide event triggering on wrapped elements so you can style any element without breaking anything

- comes with a mutation observer so every dynamically generated field is automatically wrapped

- basic style you can easily overwrite

## Available elements :
- `<input type="number">`
- `<select>`

## How to use
`npm install aznoqmous/custom-fields`

```js

import CustomFields from 'custom-fields'

new CustomFields('input[type="number"]')
new CustomFields('select')

```

## Input Number
```html
<!-- Before -->
<input type="number" name="age" value="0" step="1">

<!-- After -->
<div class="custom-element custom-input-number">
    <input type="number" name="number" value="0" step="1">
    <div class="controls">
        <i class="up"></i>
        <i class="down"></i>
    </div>
</div>
```

## Select
```html
<!-- Before -->
<select name="select">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>

<!-- After -->
<div class="custom-select custom-element">

    <!-- <select name="select" style="display: none;">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select> -->

    <span class="selected">1</span>
    <ul class="options">
        <li data-value="0" class="">0</li>
        <li data-value="1" class="selected">1</li>
        <li data-value="2">2</li>
        <li data-value="3">3</li>
        <li data-value="4">4</li>
    </ul>
</div>
```
