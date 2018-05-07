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
var app = {
    start : function() {

    },
    render : function() {

    }
};

app.start();
app.render();
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

### Prototype
