import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    // Emit event with Investment Data
    const investmentData: InvestmentInput = {
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    };
    this.calculate.emit(investmentData);

    // Clear the inputs
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
