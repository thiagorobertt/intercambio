import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { SaleService } from '../sale.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.sass']
})
export class ChatBotComponent implements OnInit {
  carouselActions = new EventEmitter<string | MaterializeAction>();

  suggestions: FormGroup;
  countries: any;
  constructor(
    private saleService: SaleService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.suggestions = this.fb.group({
      languageControl: [1],
      weatherControl: ['QUENTE'],
      partyControl: ['NETFLIX'],
      countryControl: [null]
    });
  }

  nextQuestion() {
    this.carouselActions.emit({ action: 'carousel', params: ['next'] });
  }

  redirectToResult() {
    this.router.navigate(['/sale/results']);
  }
  getCountries() {
    console.log(this.suggestions.value);
    this.saleService
      .suggestions({
        languageId: this.suggestions.value.languageControl,
        moodId: this.suggestions.value.partyControl,
        wheatherId: this.suggestions.value.weatherControl
      })
      .subscribe(countries => {
        if (Array.isArray(countries)) {
          this.countries = countries;
          console.log(countries);
          this.nextQuestion();
        }
      });
  }
}
