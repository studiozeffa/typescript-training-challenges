import {wrapInQuotes} from './challenges-01';

describe('wrapInQuotes', () => {
  it('should wrap a string in quotes', () => {
    const actual = wrapInQuotes('test');
    expect(actual).toEqual('"test"');
  });
});
