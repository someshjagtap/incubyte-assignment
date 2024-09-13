import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(value: string): number {
    const cleanedValue = this.calculateSum(value).replace('"', '');
    const filtvalue = cleanedValue.trim();
    if (!cleanedValue) return 0;

    const numberArray = filtvalue
      .split(',')
      .filter((num) => num.trim() !== '')
      .map((num) => {
        const number = parseInt(num);
        return number;
      });

    const sum = numberArray
      .filter((num) => !isNaN(num))
      .reduce((a, b) => a + b, 0);
    return sum;
  }

  calculateSum(input: string): string {
    if (input === '') return '';
    const someText1 = input.replace(/(\r\\n|\\n|\r)/g, 'MM');
    const regex = /\\MM/g;
    const pp = someText1.replace(regex, ',');
    return pp;
  }
}
