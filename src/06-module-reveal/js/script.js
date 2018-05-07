(function(global) {

  var Company = global.Company || {};

  var app = (function() {

    var _privateData = [1, 2, 3];

    // "Private" functions
    function _transformData(data) {
      return data.map(function(item) {
        return 2 * item;
      });
    }

    // "Public" functions
    function start() {
      _privateData = _transformData(_privateData);
    }

    function render() {
      console.log(_privateData);
    }

    // We "reveal" only what we want!
    return {
      start: start,
      render: render
    };

  })();

  Company.app = app;

  if (typeof global.Company === 'undefined') {
    window.Company = Company;
  }
})(window);
