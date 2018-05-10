(function(global, $) {
  'use strict';

  var App = global.App || {};
  var utils = App.utils || {};

  utils.http = (function() {
    'use strict';

    function sendAJAX(params) {
      var extraHeaders = {};

      return $.ajax({
        url: params.url,
        data: params.data,
        headers: $.extend(extraHeaders, params.headers),
        method: params.method
      });
    }

    function buildParamsObject(url, method, data) {
      return {
        url: url,
        data: data,
        method: method
      };
    }

    // Module pattern
    return {
      // Facade for GET requests
      get: function(url, data) {
        var params = buildParamsObject(url, 'GET', data);
        return sendAJAX(params);
      },
      // Facade for POST requests
      post: function(url, data) {
        var params = buildParamsObject(url, 'POST', data);
        return sendAJAX(params);
      }
    };
  })();

  App.utils = utils;

  if (typeof window.App === 'undefined') {
    window.App = App;
  }

})(window, window.jQuery);
