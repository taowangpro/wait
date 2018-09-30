'use strict';

module.exports = function (fn, msec) {
  var timer = null;

  return function(){
    timer && clearTimeout(timer);
    timer = setTimeout(function(scope, args) {
      timer = null;
      fn.apply(scope, args); 
    }, msec, this, [].slice.call(arguments));
  };
};
