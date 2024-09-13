import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiter = ',';

    if (numbers.startsWith('//')) {
      delimiter = numbers[2];
      numbers = numbers.slice(4);
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const numList = numbers.split(delimiter).map(Number);

    const negatives = numList.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numList.reduce((acc, curr) => acc + curr, 0);
  }
}
