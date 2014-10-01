// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
  var myNumber = 33;

  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
  var stringValue = numberToString(myNumber);
  console.log("stringValue = " + stringValue);

  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
  console.log("areEqual = " + areEqual(myNumber, stringValue));
  // Answer:
  // False is returned because although the values are equal,
  //   the data types are different.
  // Strict equals '===' checks if both value and type are equal.

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */
  // Answer:
  // I didn't at first but went back to fix it.

  // Do you see any other functions where code could be reused?
  // Answer:
  // square - Could return multiply(x, x)
  // minimum - Could return isLessThan(x, y) ? x : y
  // maximum - Could return isGreaterThan(x, y) ? x : y
  // isEven or isOdd (choose one) - Could return !isOdd(n) or !isEven(n)
  // letterGrade - Could use isLessThan(score, percentage)
  // incrementReviews - Could use increase(restaurant.reviews)
  // createCircle - Could use multiply for circumference and area
  //              - Could also use square for radius

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */
   // Answer:
   // If the score is less than 0, "F" is returned.
   // If the score is greater than the total value, "A" is returned.
   // This seems to make the most sense.

  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */
  function improvedCombine(word1, word2, glue) {
    return word1 + glue + word2;
  }

  // What happens if you were to uncomment the following lines?
  // Answer:
  // "combine is improved!" appears in the console.
  // The name combine is now a reference to the improvedCombine function.

  // combine = improvedCombine;
  // console.log(combine('combine', 'improved!', ' is '));
}
