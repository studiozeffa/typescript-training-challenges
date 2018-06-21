# Challenges Part 1

These challenges are designed to complement the following sections of the training course:

- [Typings](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/01-types.md#let--const)
- [Object Literals](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/02-interfaces.md#object-literals)
- [Interfaces](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/02-interfaces.md#interfaces)
- [Testing](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/03-testing.md#testing)

For each challenge:

- Write a set of unit tests which assert the desired outcome
- Implement the answer using TypeScript, ensuring that all variables and arguments are correctly typed.

## Challenges

- Create a function which wraps a string argument in double quotes and returns the new string.
- Create a function which multiplies two numbers together and returns the result.
- Create a function which:
  - accepts three arguments:
    - a required string
    - a required number
    - an optional boolean flag
  - returns the string prefixed (if the boolean flag is true) or suffixed (if the boolean flag is false or not present) with the passed number of whitespace.
  - for example, given the arguments `('hello', 3, true)` the function should respond with `'   hello'`.
- Create an enum of drinks, including 4 members: Coke, Vimto, Orange Juice and Water. Create a function which accepts a single argument, the drink, and returns a number representing the sugar content of the drink:
  - Coke: 10.6g / 100ml
  - Vimto: 4.7g / 100ml
  - Orange Juice: 8g / 100ml
  - Water: 0g / 100ml
- Create a function which accepts a variable number of string arguments. Return an array of tuples - each tuple should contain the passed string, along with the number of characters in the string. (For example, given the arguments `'hello', 'world'`, return `[['hello', 5], ['world', 5]]`);
- Create a function that:
  - expects an optional object conforming to the following interface `PartialFormField`:
    - an optional property `text`, which is a string
    - an optional property `onChange`, which is a function accepting a single argument `value` (string) and returning nothing
  - returns a **new** object which contains:
    - any passed property copied over
    - any omitted property filled in with a default
  - for example, given the input `{ text: 'bottle' }`, return a new object `{ onChange: (value) => null, text: 'bottle' }`
  - (hint: when writing your test, use the matcher [`expect.any`](https://facebook.github.io/jest/docs/en/expect.html#expectanyconstructor) to check that the onChange property in the returned object is a `Function`).

## Extra Credit

If you've finished up to this point, you may want to check out some of the [extra challenges](./challenges-extra).