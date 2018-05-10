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

  // We MUST use Object.create
  // Prototypal inheritance, as defined in the ECMAScript 5 standard,
  // requires the use of Object.create.
  // Object.create creates an object which has a specified prototype and optionally
  // contains specified properties as well (e.g Object.create( prototype, optionalDescriptorObjects )).

  var esmeralda = Object.create(genericUser, {
    'name': {
      value: 'Esmeralda',
      // writable:false, configurable:false by default
      enumerable: true
    },
    'email': {
      value: 'esmeralda@webtraining.zone',
      // writable:false, configurable:false by default
      enumerable: false
    }
  });

  console.log(esmeralda, esmeralda.addAttribute());

  // Let's print enumerable properties
  for (var property in esmeralda) {
    if (esmeralda.hasOwnProperty(property)) {
      console.info(property, ' -> ', esmeralda[property]);
    }
  }
})();
