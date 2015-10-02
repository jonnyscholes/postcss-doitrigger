# postcss-doitrigger

Parses stylesheets and generates a list of declarations that will trigger a
layout, paint or composite. Uses data from [csstriggers.com](http://csstriggers.com/).

## Usage

```javascript
var fs = require('fs');
var postcss = require('postcss');
var doitrigger = require('postcss-doitrigger');

var css = fs.readFileSync('./styles.css', 'utf8');
postcss()
  .use(doitrigger())
  .process(css)
  .then(function (result) {
    result.messages.forEach(function (message) {
      console.log(message);
    })
});
```
