
Failing for the frail.

This simply creates a standard Error with the name set to the code you pass and property called 'fail' set to true.
Useful if you have an error, that you want treated like an error (in callback hell), but once you handle it
you can treat it differently than an unknown error that cropped up.

## Install

In package.json, under dependencies, you can do...

```"fail": "https://github.com/wookets/node-fail/0.1.0"```


## Usage

```
var fail = require('fail');

return callback(fail('ErrorCode', 'something went wrong, but not so wrong'));

fail('InvalidParameter', 'One or more parameters is incorrect.');

```
