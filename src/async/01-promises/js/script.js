(function() {

  function step1() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('>> step 1');
        resolve(100);
      }, 1500);

    });
  }

  function step2(number) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('>> step 2');
        resolve([number, 200]);
      }, 100);

    });
  }

  function step3(items) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve([...items, 300]);
      }, 50);

    });
  }

  step1().then(function(number) {
    console.log('After 1', number);
    return step2(number);
  }).then(function(items) {
    console.log('After 2', items);
    return step3(items);
  }).then(function(items) {
    console.log('After 3', items);
  });

})();
