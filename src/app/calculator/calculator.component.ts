import { Component } from '@angular/core';
import { StringCalculatorService } from 'src/services/string-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  result: number | null = null;
  sresult: string | null = null;
  input: string = '';
  errorMessage: string | null = null;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  calculate(): void {
    try {
      this.errorMessage = null;
      this.result = this.stringCalculatorService.add(
        JSON.stringify(this.input)
      );
    } catch (error: any) {
      console.log('error', error);

      this.errorMessage = error.message;
    }
  }
}
