import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [ResultsComponent, ChatBotComponent, CheckoutComponent, PaymentComponent],
  imports: [
    CommonModule
  ]
})
export class SaleModule { }
