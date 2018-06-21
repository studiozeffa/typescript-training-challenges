export function wrapInQuotes(str: string): string {
  return `"${str}"`;
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function padString(str: string, amount: number, prefix?: boolean): string {
  if(amount < 1) {
    return str;
  }

  const padding = ' '.repeat(amount);
  return prefix ? `${padding}${str}` : `${str}${padding}`;
}

export enum Drinks {
  Coke,
  Vimto,
  OJ,
  Water
};

export function getSugarContent(drink: Drinks): number {
  switch(drink) {
    case Drinks.Coke: return 10.6;
    case Drinks.Vimto: return 4.7;
    case Drinks.OJ: return 8;
    case Drinks.Water: return 0;
  }
}

export function countCharacters(...words: Array<string>): Array<[string, number]> {
  const rtn: Array<[string, number]> = [];
  words.forEach(w => {
    rtn.push([w, w.length]);
  });
  return rtn;

  // If you'd prefer to use `map`, you need to cast the returned value
  // from the map to make TypeScript happy. ⇩⇩⇩
  // const rtn = words.map(word => (<[string, number]>[ word, word.length ]));
  // return rtn;
}

export interface PartialFormField {
  text?: string,
  onChange?: (value: string) => void
};
export interface FormField {
  text: string,
  onChange: (value: string) => void
};

export function formFieldDefaults(field: PartialFormField = {}): FormField {
  return {
    text: '',
    onChange: () => null,
    ...field
  };
};
