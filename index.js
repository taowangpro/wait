'use strict';

module.exports = function(fn, msec, scope) {
  var timer = null;

  var delayFn = function(args) {
    timer = null;
    fn.apply(scope, args);
  };

  return function() {
    timer && clearTimeout(timer);
    timer = setTimeout(delayFn, msec, [].slice.call(arguments));
  };
};
