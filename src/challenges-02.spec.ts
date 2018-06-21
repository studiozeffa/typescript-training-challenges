import {Hero, BuzzLightyear, getNetPrice, Australia, EU, Canada, reverse, Dictionary} from './challenges-02';

describe('Hero', () => {
  it('should return a mantra', () => {
    const hero = new Hero();
    expect(hero.mantra).toEqual('To save the world!');
  });

  it('should get a list of passed powers', () => {
    const hero = new Hero(['flight', 'strength']);
    expect(hero.getPowers()).toEqual('flight, strength');
  });

  it('should return none if there were no powers', () => {
    const hero = new Hero();
    expect(hero.getPowers()).toEqual('(none)');
  });

  describe('#getSuperchargedPowers', () => {
    it('should resolve with the supercharged powers', async () => {
      const hero = new Hero(['flight', 'strength']);
      const supercharged = await hero.getSuperchargedPowers();
      expect(supercharged).toEqual(['FLIGHT', 'STRENGTH']);
    });

    it('should reject if there are no powers', async () => {
      const hero = new Hero();

      // Either...
      const actual = hero.getSuperchargedPowers();
      expect(actual).rejects.toThrowError('No powers!');

      // Or...
      let err = null;
      try {
        await hero.getSuperchargedPowers();
      } catch (e) {
        err = e;
      }
      expect(err).toEqual(new Error('No powers!'));
    });
  });
});

describe('BuzzLightyear', () => {
  it('should include a static fullName', () => {
    expect(BuzzLightyear.fullName).toEqual('Buzz Lightyear');
  });

  it("should return Buzz's powers", () => {
    const buzz = new BuzzLightyear();
    expect(buzz.getPowers()).toEqual('flight, laser beam, humour');
  });

  it("should return Buzz's mantra", () => {
    const buzz = new BuzzLightyear();
    expect(buzz.mantra).toEqual('To infinity, and beyond!');
  });
});

describe('Generics', () => {
  describe('reversable', () => {
    it('should reverse an array of numbers', () => {
      const arr = [1, 2, 3];
      const actual = reverse(arr);
      expect(actual).toEqual([3, 2, 1]);
    });
    it('should reverse an array of strings', () => {
      const arr = ['1', '2', '3'];
      const actual = reverse(arr);
      expect(actual).toEqual(['3', '2', '1']);
    });
  });

  describe('Dictionary', () => {
    it('should add a string item to the dictionary', () => {
      const dict = new Dictionary<string>();
      dict.add('name', 'bob');
      expect(dict.lookup('name')).toBe('bob');
    });

    it('should remove a string item from the dictionary', () => {
      const dict = new Dictionary<string>();
      dict.add('name', 'bob');
      expect(dict.lookup('name')).toBe('bob');

      dict.remove('name');
      expect(dict.lookup('name')).toBeUndefined();
    });
  });
});

describe('#getNetPrice', () => {
  it('should return the correct pricing information for Australia', () => {
    const price = 110;
    const taxable: Australia = {
      region: 'aus',
    };
    const actual = getNetPrice(price, taxable);
    expect(actual).toEqual({
      net: 100,
      tax: 10,
    });
  });

  it('should return the correct pricing information for the EU', () => {
    const price = 240;
    const taxable: EU = {
      region: 'eu',
      vat: 20,
    };
    const actual = getNetPrice(price, taxable);
    expect(actual).toEqual({
      net: 200,
      tax: 40,
    });
  });

  it('should return the correct pricing information for Canada', () => {
    const price = 330;
    const taxable: Canada = {
      region: 'can',
      pst: 6,
    };
    const actual = getNetPrice(price, taxable);
    expect(actual).toEqual({
      net: 297,
      tax: 33,
    });
  });
});
