import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CorerRoutingModule } from './core-routing.module';
import { MaterializeModule } from 'angular2-materialize';
@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, CorerRoutingModule, MaterializeModule],
  exports: [LoginComponent, HomeComponent]
})
export class CoreModule {}
