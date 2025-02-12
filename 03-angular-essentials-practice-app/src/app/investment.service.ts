import { Injectable, signal } from "@angular/core";

import type { AnnualInvestmentResults, InvestmentInput } from "./investment-input.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultsData = signal<AnnualInvestmentResults[] | undefined>(undefined);

  calculateInvestmentResults(investmentInputData: InvestmentInput): void {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investmentInputData;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);
  }
}
