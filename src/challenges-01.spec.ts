import {
  wrapInQuotes,
  multiply,
  padString,
  getSugarContent,
  Drinks,
  countCharacters,
  formFieldDefaults,
} from './challenges-01';

describe('wrapInQuotes', () => {
  it('should wrap a string in quotes', () => {
    const actual = wrapInQuotes('test');
    expect(actual).toEqual('"test"');
  });
});

describe('multiply', () => {
  it('should multiply two numbers together', () => {
    const actual = multiply(4, 7);
    expect(actual).toEqual(28);
  });
});

describe('padString', () => {
  it('should not pad the string if the amount is less than 1', () => {
    expect(padString('hello', 0)).toEqual('hello');
    expect(padString('hello', -1)).toEqual('hello');
    expect(padString('hello', -42)).toEqual('hello');
  });

  it('should pad a string to the left', () => {
    const actual = padString('hello', 3, true);
    expect(actual).toEqual('   hello');
  });

  it('should pad a string to the right by omitting the third argument', () => {
    const actual = padString('hello', 5);
    expect(actual).toEqual('hello     ');
  });

  it('should pad a string to the right by setting the third argument to false', () => {
    const actual = padString('hello', 1, false);
    expect(actual).toEqual('hello ');
  });
});

describe('getSugarContent', () => {
  it('should describe the sugar content for Coke', () => {
    const actual = getSugarContent(Drinks.Coke);
    expect(actual).toEqual(10.6);
  });

  it('should describe the sugar content for Vimto', () => {
    const actual = getSugarContent(Drinks.Vimto);
    expect(actual).toEqual(4.7);
  });

  it('should describe the sugar content for Orange Juice', () => {
    const actual = getSugarContent(Drinks.OJ);
    expect(actual).toEqual(8);
  });

  it('should describe the sugar content for Water', () => {
    const actual = getSugarContent(Drinks.Water);
    expect(actual).toEqual(0);
  });
});

describe('countCharacters', () => {
  it('should count the characters of a series of words', () => {
    const actual = countCharacters('the', 'quick', 'brown', 'fox');
    expect(actual).toEqual([['the', 3], ['quick', 5], ['brown', 5], ['fox', 3]]);
  });
});

describe('formFieldDefaults', () => {
  it('produces a set of form field defaults if no form field is passed in', () => {
    const actual = formFieldDefaults();
    expect(actual).toEqual({
      text: '',
      onChange: expect.any(Function),
    });
  });

  it('produces a default onChange handler', () => {
    const actual = formFieldDefaults({
      text: 'bottle',
    });
    expect(actual).toEqual({
      text: 'bottle',
      onChange: expect.any(Function),
    });
  });

  it('produces default text', () => {
    const onChange = () => null;
    const actual = formFieldDefaults({
      onChange,
    });
    expect(actual).toEqual({
      text: '',
      onChange,
    });
  });

  it('should preserve a full object', () => {
    const onChange = () => null;
    const formField = {
      text: 'bottle',
      onChange,
    };
    const actual = formFieldDefaults(formField);
    expect(actual).toEqual(formField);
    expect(actual).not.toBe(formField);
  });
});
