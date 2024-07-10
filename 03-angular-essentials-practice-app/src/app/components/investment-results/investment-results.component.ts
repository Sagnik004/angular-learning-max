import { Component, Input } from '@angular/core';
import { CurrencyPipe } from "@angular/common";

import { AnnualInvestmentResults } from '../../investment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: [CurrencyPipe],
})
export class InvestmentResultsComponent {
  @Input() results?: AnnualInvestmentResults[];
}
