(function(global) {

  var Company = global.Company || {};

  var app = {
    start: function() {
      console.log('>> start() external');
    },
    render: function() {
      console.log('>> render() external');
    },
    data : [1, 3, 5]
  };

  Company.app = app;

  if (typeof global.Company === 'undefined') {
    window.Company = Company;
  }
})(window);
