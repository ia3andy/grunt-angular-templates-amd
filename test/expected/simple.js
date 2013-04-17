(function() {
  var templatesCacheLoader = ["$templateCache", function($templateCache) {

    $templateCache.put("simple.html",
      "Howdy there! \\ Your name is \"{{ name }}\"." +
      ""
    );

  }];

  // CommonJS module is defined
  if (hasModule) {
      module.exports = templatesCacheLoader;
  }
  /*global ender:false */
  if (typeof ender === 'undefined') {
      this['templatesCacheLoader'] = templatesCacheLoader;
  }
  /*global define:false */
  if (typeof define === "function" && define.amd) {
      define("templatesCacheLoader", [], function () {
          return templatesCacheLoader;
      });
  }
})();