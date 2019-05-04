import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { UserService } from '../user.service';
import { User } from '../user';
import * as moment from 'moment';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {
  form: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(35)
          ]
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.minLength(8), Validators.required]],
        confirmPassword: [null, [Validators.required]],
        birthdayDate: [null, [Validators.required]],
        genre: [null, [Validators.required]]
      },
      {
        validator: PasswordValidation.MatchPassword
      }
    );
  }

  onSubmit() {
    console.log(this.form.value);
    const user: User = this.form.value as User;
    console.log(user);
    user.birthdayDate = moment(user.birthdayDate, 'DDMMYYYY').format(
      'YYYY-MM-DD[T]HH:mm:ss'
    );
    user.profiles = [{ description: 'ROLE_USER' }];
    this.userService.create(user).subscribe(u => console.log(u));
  }
}
