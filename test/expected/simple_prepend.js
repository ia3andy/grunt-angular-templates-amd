(function() {
  return ["$templateCache", function($templateCache) {

    $templateCache.put("/prepend/simple.html",
      "Howdy there! \\ Your name is \"{{ name }}\"." +
      ""
    );

  }];
})();