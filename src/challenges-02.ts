type HeroPowers = Array<string>;

export class Hero {
  private _powers: HeroPowers;

  constructor(powers: HeroPowers = []) {
    this._powers = powers;
  }

  get mantra() {
    return 'To save the world!';
  }

  getPowers() {
    return this._powers.join(', ') || '(none)';
  }

  private supercharge(power: string) {
    return power.toUpperCase();
  }

  getSuperchargedPowers(): Promise<HeroPowers> {
    return new Promise((resolve, reject) => {
      if(!this._powers.length) {
        return reject(new Error('No powers!'));
      }
      const superchargedPowers = this._powers.map(this.supercharge);
      resolve(superchargedPowers);
    })
  }
}

export class BuzzLightyear extends Hero {
  constructor() {
    super(['flight', 'laser beam', 'humour']);
  }

  static fullName = 'Buzz Lightyear';

  get mantra() {
    return 'To infinity, and beyond!';
  }
}

export function reverse<T>(items: Array<T>): Array<T> {
  return items.reverse();
}

interface DictionaryStore<T> {
  [key: string]: T
};

export class Dictionary<T> {
  private items: DictionaryStore<T> = {};

  add(key: string, item: T) {
    this.items[key] = item;
  }

  lookup(key: string) {
    return this.items[key];
  }

  remove(key: string) {
    delete this.items[key];
  }
}

export interface EU {
  region: 'eu',
  vat: number
};

export interface Australia {
  region: 'aus',
};

export interface Canada {
  region: 'can',
  pst: number
};

type Taxable = EU | Australia | Canada;

interface Pricing {
  net: number,
  tax: number
};

function calculateNetPrice(grossPrice: number, taxPercent: number): Pricing {
  // taxPercent is a number between 0 and 100.
  const taxRatio = taxPercent / 100;

  // Round any floating point errors.
  const netPrice = Math.round(grossPrice / (taxRatio + 1));

  return {
    net: netPrice,
    tax: grossPrice - netPrice
  };
}

export function getNetPrice(grossPrice: number, t: Taxable): Pricing {
  switch(t.region) {
    case 'aus': return calculateNetPrice(grossPrice, 10);
    case 'eu': return calculateNetPrice(grossPrice, t.vat);
    case 'can': return calculateNetPrice(grossPrice, t.pst + 5);
  }
}
