import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  carouselActions = new EventEmitter<string | MaterializeAction>();
  modalActions = new EventEmitter<string | MaterializeAction>();
  constructor() {}

  ngOnInit() {
    window.setInterval(() => {
      this.carouselActions.emit({ action: 'carousel', params: ['next'] });
    }, 10000);
  }

  onModalOpen(open: boolean) {
    console.log(open);
    if (open) {
      this.modalActions.emit({ action: 'modal', params: ['open'] });
    }
  }
  closeModal(close) {
    if (close) {
      this.modalActions.emit({ action: 'modal', params: ['close'] });
    }
  }
}
