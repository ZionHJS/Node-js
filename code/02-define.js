define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
    exports.verb = function() {
        return beta.verb();
        //Or:
        return require("beta").verb();
    }
});

define(["alpha"], function (alpha) {
    return {
      verb: function(){
        return alpha.verb() + 2;
      }
    };
});

define({
    add: function(x, y){
      return x + y;
    }
});

define(function (require, exports, module) {
    var a = require('a'),
        b = require('b');

    exports.action = function () {};
});
