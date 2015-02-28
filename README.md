# TV Check

A simple package to check if a requested browser is a television.

## Why?
I was working on a web application that needed act differently on television.
To my surprise there wasn't anything simple enough out there yet. That is why I decided to make this and put in in npm.


## How?

### Install

To install just run

```bash
npm install tv_check --save
```

### Usage

By example with express

```javascript

var tvCheck = require('tv_check');
var express = require('express');
var app = express();


app.get('/', function( req, res ){
  if( tvCheck.check( req ) === false ){
    // Normal code ...
  } else{
  	// Television code ...
  };
});

```

## Contributing

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create a new Pull Request

### Tests

We are using [mocha](http://mochajs.org/) for test.
To test just run 

```bash
npm test
# or 
make test
```


## License

This package is under [MIT License](https://github.com/RamonGebben/tv_check/blob/master/LICENSE)
