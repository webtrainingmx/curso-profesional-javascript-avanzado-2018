function concatLetter(a, b, c, d) {
  return `${a} ${b} ${c} ${d}`;
}

class SpreadOperations {

  static createExampleSpreadSyntax() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // Example 1: concat
    const numbers = [3, 5, 0];

    // Immutable
    numbers.concat([1]);
    console.log(numbers); // [3, 5, 0]

    // Mutable
    numbers.push(1);
    console.log(numbers); // [3, 5, 0, 1]

    // Immutable
    console.log([...numbers, 32]); // [3, 5, 0, 1, 32]
    console.log(numbers); // [3, 5, 0, 1]

    // Example 2: Parameters in functions
    const phrases = ['anita', 'lava', 'la', 'tina'];

    console.log(concatLetter(...phrases));
  }
}

export const CONFIG = true;
export {concatLetter};
export default SpreadOperations;
