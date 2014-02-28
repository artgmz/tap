"use strict";

// Enable users to tap, instead of click, for button actions.
angular.module("sample.directives", []).directive("tap", function() {
    return function(scope, element, attrs) {
        var tapping = false;

        element.bind("touchstart", function() { tapping = true; });

        element.bind("touchmove", function() { tapping = false; });

        element.bind("touchend", function() {
            if(tapping && !attrs["disabled"]) { scope.$apply(attrs["tap"]); }
        });
    };
});