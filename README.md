# grunt-angular-templates-amd 

Grunt build task to concatenate & register your AngularJS templates in the $templateCache wrapped for amd usage

**NOTE**:

- Use `0.1.x` for Grunt `0.3.x`.
- Use `0.2.x` or `0.3.x` for Grunt `0.4.x`.


## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-angular-templates`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-angular-templates');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md


## Documentation

This plugin provides the grunt task `ngtemplates`, which will allow you to compile your HTML templates into a single JS file,
which preloads `$templateCache` to prevent round-trips to the server.

### Update Grunt

```js
// grunt.js
grunt.initConfig({
  ngtemplates:    {
    build:        {
      options:    {
        module:   'template',         // AMD module name (should be the filename)
        base:     'src/views',        // $templateCache ID will be relative to this folder
        prepend:  '/static/assets/'   // (Optional) Prepend path to $templateCache ID
      },
      src:        [ 'src/views/**.html' ],
      dest:       'dist/templates.js'
    }
  }
});
```

This will generate the following at `dist/templates.js`:

```js
(function() {
  var templatesCacheLoader = ["$templateCache", function($templateCache) {

    ...

  }];

  // CommonJS module is defined
  if (typeof module !== "undefined" && module.exports) {
      module.exports = templatesCacheLoader;
  }
  /*global ender:false */
  if (typeof ender === 'undefined') {
      this['templates'] = templatesCacheLoader;
  }
  /*global define:false */
  if (typeof define === "function" && define.amd) {
      define("templates", [], function () {
          return templatesCacheLoader;
      });
  }
})();
```

### Include Compiled Templates in angular app


```javascript
var app = angular.module('MyApp', []);
var templateCacheLoader = require('template');

if(templateCacheLoader != null)
  app.run(templateCacheLoader);
```



## Changelog



### v0.1.0

- Released to [NPM](https://npmjs.org/package/grunt-angular-templates-amd)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].


## License

Copyright (c) 2013 Andy Damevin
Licensed under the MIT license.
