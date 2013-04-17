(function() {
  var templatesCacheLoader = ["$templateCache", function($templateCache) {

    $templateCache.put("multiple/one.html",
      "<h1>One</h1>" +
      "" +
      "<p>I am one.</p>" +
      "" +
      "<script>" +
      "  // Test" +
      "  /* comments */" +
      "  var foo = 'bar';" +
      "</script>" +
      ""
    );

    $templateCache.put("multiple/two/two.html",
      "<h2>Two</h2>" +
      "" +
      "<p>We are two.</p>" +
      ""
    );

  }];

  // CommonJS module is defined
  if (typeof module !== "undefined" && module.exports) {
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