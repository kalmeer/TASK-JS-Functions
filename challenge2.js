/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`Hello ${name}`);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  if (n % 2 > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here

  if (n % 2 > 0) {
    console.log((n - 1) / 2);
  }
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let x = 0;
  if (n % 2 == 0) {
    x = n * 2;
  } else {
    x = Math.sqrt(n);
  }
  return x;
}

greet("khalid");
console.log(isOdd(5));
console.log(isOdd(6));
console.log(squareOrDouble(6));
console.log(squareOrDouble(5));
