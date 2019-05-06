import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  products;
  constructor(private saleService: SaleService) {}

  ngOnInit() {
    this.saleService.avail().subscribe(products => {
      this.products = products;
    });
  }
}
