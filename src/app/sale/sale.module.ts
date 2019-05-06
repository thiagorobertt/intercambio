import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { SaleRoutingModule } from './sale-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MaterializeModule } from 'angular2-materialize';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ResultsComponent,
    ChatBotComponent,
    CheckoutComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    MaterializeModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SaleModule {}
