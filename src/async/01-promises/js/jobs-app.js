(function(global, axios) {

  var Company = global.Company || {};

  var app = (function() {

    var _privateData = [];

    // "Private" functions
    function _getData(url) {
      return axios.get(url);
    }

    // "Public" functions
    function start() {
      var url = './data/job-positions-api.json';

      return new Promise(function(resolve, reject) {
        _getData(url).then(function(response) {
          _privateData = response.data;
          resolve(_privateData);
        }, function(error) {
          console.error(error);
        });
      });

    }

    function render(options) {
      var element = options.el || false;
      var data = options.data || [];

      var $domElement = document.querySelector(element);

      if (!!$domElement) {

        var items = ['<ul>'];

        data.forEach(function(jobPosition) {
          items.push('<li><div class="b-job box">'
              + '<a href="#">' + jobPosition.title + '</a>'
              + ' <strong>(' + jobPosition.location + ')</strong>'
              + '</div></li>');
        });

        items.push('</ul>');

        $domElement.innerHTML = items.join('');
      }
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
})(window, window.axios);
