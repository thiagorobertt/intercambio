import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.sass']
})
export class ChatBotComponent implements OnInit {
  carouselActions = new EventEmitter<string | MaterializeAction>();
  constructor() {}

  ngOnInit() {}

  nextQuestion() {
    this.carouselActions.emit({ action: 'carousel', params: ['next'] });
  }
}
