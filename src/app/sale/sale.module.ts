import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { SaleRoutingModule } from './sale-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [ResultsComponent, ChatBotComponent, CheckoutComponent, PaymentComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
