import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDocsComponent } from './user-docs/user-docs.component';
import { UserShippingsComponent } from './user-shippings/user-shippings.component';

@NgModule({
  declarations: [UserFormComponent, UserDocsComponent, UserShippingsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
