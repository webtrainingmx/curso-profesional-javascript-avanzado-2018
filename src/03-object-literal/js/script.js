(function() {
  var app = {
    start: function() {
      console.log('>> external start');
    },
    render: function() {
      console.log('>> external render');
    }
  };

  app.start();
  app.render();
})();
