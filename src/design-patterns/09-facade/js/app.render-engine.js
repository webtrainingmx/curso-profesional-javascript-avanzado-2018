(function(global, Handlebars) {
  'use strict';

  var App = global.App || {};

  App.engine = (function() {
    'use strict';

    function render(params) {
      var renderElement = params.renderElement || false;
      var templateSelector = params.templateSelector || false;
      var context = params.data || {};

      if (!!renderElement && !!templateSelector) {
        var $domElement = document.querySelector(renderElement);

        var source = document.querySelector(templateSelector).innerHTML;
        var templateFunction = Handlebars.compile(source);

        $domElement.innerHTML = templateFunction(context);
      }

    }

    // Reveal pattern
    return {
      render: render
    };
  })();

  if (typeof window.App === 'undefined') {
    window.App = App;
  }

})(window, window.Handlebars);
