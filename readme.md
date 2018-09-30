# wait-ui

> Wait for a certain amount quilt time before calling function execution.
> It is purposely slow down the response for user's interaction.

# Why

> It is not necessary to response that fast or this response become costly to do.
> Say, typeahead call to fetch suggestion only after user stop typing; Mouseover show sub menu only when users's mouse stop on a item...

## API

```
const waitUI = require('wait-ui');

waitUI(fn, msec, scope);
```

## Usage
```
// set up component
[component].onMouseover(waitUI(this.handleMouseover, 300, scope))

// the very last mouseover event happen 300ms ago
handleMouseover(event) {
  // this is scope
  ...
}

```