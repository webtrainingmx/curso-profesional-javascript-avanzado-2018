# Curso Profesional JavaScript Avanzado | Patrones de Diseño

## Initial Design Patterns

### Global Stuff (don't do it, please!)
```
<script type="text/javascript">
    function start() {

    }

    function render() {

    }

    start();
    render();
</script>
```


### IIFE (Immediately-Invoked Function Expression )

```
(function(){
    console.log('Better approach');
})();
```

### Object Literal

```
(function(){
    var app = {
        start : function() {

        },
        render : function() {

        }
    };

    app.start();
    app.render();
})();
```

### Namespace

```
(function(global) {

  var Company = global.Company || {};

  var app = {
    start: function() {
      console.log('>> start() external');
    },
    render: function() {
      console.log('>> render() external');
    }
  };

  Company.app = app;

  if (typeof global.Company === 'undefined') {
    window.Company = Company;
  }
})(window);
```

### Module

```
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

app.start();
app.render();
```

### Module Reveal

```
(function() {
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

    app.start();
    app.render();
})();
```

## Creational Design Patterns

### Singleton

```
(function() {
    var Singleton = (function() {

        var _instance;
        var _items = [];

        function _insertItemInArray(item) {
            console.log(">> _insertItem()", item);
            _items.push(item);
        }

        // "start" is a particular function of our app
        function start() {
            _insertItemInArray('Initial string');
        }

        function render() {
            console.log(">> render()", _items);
        }

        function add(item) {
            _insertItemInArray(item);
        }

        // "init" is from the Singleton pattern
        function init() {
            return {
                start: start,
                add: add,
                render: render
            }
        }

        return {
            getInstance: function() {
                if (!_instance) {
                    console.log
                    _instance = init();
                }

                return _instance;
            }
        };

    })();

    // We use the .getInstance() function instead of a constructor
    var appOne = Singleton.getInstance();
    appOne.start();

    var appTwo = Singleton.getInstance();
    appTwo.start();

    appOne.add('Inserted by appOne');
    appTwo.add('Inserted by appTwo');

    appOne.render();
    appTwo.render();


})();
```

### Factory
```
(function(global, $) {
  'use strict';

  var App = global.App || {};
  var utils = App.utils || {};

  utils.http = (function() {
    'use strict';

    function sendAJAX(params) {

    }

    function buildParamsObject(url, method, data) {

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



})(window);
```

### Prototype

Crea objetos basado en un *template* de un objeto existente mediante
**clonación**.

```
(function() {
  'use strict';

  var genericUser = {
    name: '',
    addAttribute: function() {
      console.log('>> addAttribute');
    },
    getAttribute: function() {
      console.log('>> getAttribute');
    }
  };

  // We use "the prototype" pattern to create an object called "esmeralda"
  var esmeralda = Object.create(genericUser, {
    'name': {
      value: 'Esmeralda',
      // writable:false, configurable:false by default
      enumerable: true
    }
  });

  console.log(esmeralda, esmeralda.addAttribute());

})();

```
