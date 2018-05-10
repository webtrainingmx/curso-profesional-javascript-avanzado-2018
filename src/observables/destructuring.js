// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack
// values from arrays, or properties from objects, into distinct variables.

export default class Destructuring {

  createDestructuringExample() {
    let a, b, letters;
    [a, b, ...letters] = ['a', 'b', 10, 20, 30, 40, 50];

    console.log(a, b, letters);
  }

  arrayDestructuringExample() {
    let array = ['email@example.com', 'other@email.com'];

    for (let [index, email] of array.entries()) {
      console.log(`Email at position: ${index} => ${email}`);
    }
    
  }

}
