(function() {
    "use strict";

    angular
        .module("ionCloud.filters")
        .filter("previewText", previewText);

    function previewText() {
        return function (text, noOfChar) {
            if(text){
                if(text.length > noOfChar){
                    return text.substring(0, noOfChar);
                }
                return text;
            }
        };
    }
})();