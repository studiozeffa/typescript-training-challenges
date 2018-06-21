# TypeScript Training Course: Challenges

This repo has everything you need to complete the challenges for the [TypeScript training course](https://github.com/studiozeffa/typescript-training-course).

The challenges are mostly structured as unit tests, which will be authored using the [Jest](https://facebook.github.io/jest/) testing framework. For each challenge, write a function and an associated set of unit tests which asserts the correct behaviour.

We'll be writing the tests using TypeScript, a language that has excellent support from Jest.

## Installation

- Ensure you have the latest LTS version of node.js installed.
- Clone or download this repository.
- In the terminal, change directory to this repo and run `npm install` to install the dependencies.

## Usage

- Each set of challenges can be found in the [challenges](./challenges) directory.
- Create two new files in the `src` directory for each set of challenges - one for the implementation, and the other for the tests. The first set of challenges already has these files created - see the [src](./src) folder for more details.
- To run the jest runner once, use the command:

``` bash
npm test
```

- To run the jest runner in 'watch mode', which will re-run any changed tests when a file is saved, use the command:

``` bash
npm run test:watch
```
