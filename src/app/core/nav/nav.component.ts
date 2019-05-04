import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Output() openModal = new EventEmitter<boolean>();
  @Input() isLogged;
  constructor() {}

  ngOnInit() {}
  open() {
    this.openModal.emit(true);
  }
}
