import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: [CurrencyPipe],
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }
}
