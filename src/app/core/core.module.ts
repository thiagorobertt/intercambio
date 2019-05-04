import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CorerRoutingModule } from './core-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
@NgModule({
  declarations: [LoginComponent, HomeComponent, NavComponent],
  imports: [
    CommonModule,
    CorerRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
  ],
  exports: [LoginComponent, HomeComponent, NavComponent]
})
export class CoreModule {}
