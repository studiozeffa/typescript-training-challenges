# Challenges Part 2

These challenges are designed to complement the following sections of the training course:

- [Async workflows](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/04-classes.md#promises)
- [Classes](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/04-classes.md#classes)
- [Advanced Types](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/05-advanced-types.md#advanced-types)
- [Generics](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/06-generics-decorators.md#generics)
- [Decorators](https://github.com/studiozeffa/typescript-training-course/blob/master/notes/06-generics-decorators.md#decorators)

- For each challenge:
  - Write a set of unit tests which assert the desired outcome
  - Implement the answer using TypeScript, ensuring that all variables and arguments are correctly typed.

## Challenges

### Classes

- Create a class `Hero` with the following characteristics:
  - a single getter `mantra`, which should return `To save the world!`
  - an instance property `_powers` as an array of strings.
  - a constructor which accepts a `powers` array
  - the constructor should check if the `powers` array contains powers. If so, it should be set to the instance property `_powers`, or an empty array otherwise.
  - a method `getPowers` which returns each superpower separated by a comma, or if no powers a string `(none)`.
- Create a class `BuzzLightyear` which inherits from `Hero` with the following characteristics (make sure you use `super` calls where appropriate):
  - A static `fullName` property, `Buzz Lightyear`
  - The powers `'flight', 'laser beam', 'humour'`
  - The mantra `To infinity, and beyond!`
- In the `Hero` class, create a new `getSuperchargedPowers()` method:
  - if the hero has no powers, return a rejected promise with an error containing a message `No powers!`
  - otherwise, return a promise resolved with an array containing each power, uppercased
  - When writing your test, ensure you use the [async/await workflow](https://facebook.github.io/jest/docs/en/asynchronous.html#async-await).

### Generics

- Write a function that accepts an array of (generic) items, and returns a new array with the items in the reverse order.
- Write a `Dictionary` class defined with a generic parameter `T`. Implement three methods:
  - `add(key: string, value: T)`: adds a value (typed generically) to the specified key
  - `lookup(key: string)`: looks up a value by the specified key
  - `remove(key: string)`: removes a value by the specified key, if one exists

### Advanced Types

Given a gross price and sales tax percentages for a number of different regions, calculate the net price and total tax. Use the following rules:

- EU: charges VAT. Each country charges a different percentage.
- Australia: GST is charged at 10%.
- Canada: in most states, two taxes are levied, PST (which varies from state to state) and GST (which is always 5%).

When completing the answer, use a Discriminated Union type to combine the different variations of tax into a single type. For example:

``` ts
interface EU {
  kind: 'eu',
  vat: number
};

interface Australia {
  kind: 'aus',
};

// TODO add Canada

type Taxable = EU | Australia /* | Canada */;

function deconstructPrice(grossPrice: number, t: Taxable): ??? {
  // TODO return net price and total tax amount
}
```

_Hint_: to calculate the net price, use the following function:

``` ts
function calculateNetPrice(grossPrice: number, taxPercent: number): number {
  // taxPercent is a number between 0 and 100.
  const taxRatio = taxPercent / 100;

  const netPrice = grossPrice / (taxRatio + 1);

  // Round any floating point errors.
  return Math.round(netPrice);
}
```

## Extra Credit

If you've finished up to this point, you may want to check out some of the [extra challenges](./challenges-extra).