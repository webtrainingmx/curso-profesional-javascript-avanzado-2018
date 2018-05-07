(function(global) {

  var Company = global.Company || {};

  var app = (function() {

    var _privateData = [1, 2, 3];

    return {
      start: function() {
        _privateData = _privateData.map(function(item) {
          return 2 * item;
        });
      },
      render: function() {
        console.log(_privateData);
      }
    };

  })();

  Company.app = app;

  if (typeof global.Company === 'undefined') {
    window.Company = Company;
  }
})(window);
