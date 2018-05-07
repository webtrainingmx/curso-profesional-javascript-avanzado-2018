(function() {
  var Singleton = (function() {

    var _instance;
    var _items = [];

    function _insertItemInArray(item) {
      console.log('>> _insertItem()', item);
      _items.push(item);
    }

    // "start" is a particular function of our app
    function start() {
      _insertItemInArray('Initial string');
    }

    function render() {
      console.log('>> render()', _items);
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
      };
    }

    return {
      getInstance: function() {
        if (!_instance) {
          console.log;
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
