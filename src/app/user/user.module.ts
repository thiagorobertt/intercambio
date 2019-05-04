import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDocsComponent } from './user-docs/user-docs.component';
import { UserShippingsComponent } from './user-shippings/user-shippings.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [UserFormComponent, UserDocsComponent, UserShippingsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [UserFormComponent, UserDocsComponent, UserShippingsComponent]
})
export class UserModule {}
