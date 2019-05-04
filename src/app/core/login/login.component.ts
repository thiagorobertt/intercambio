import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(8), Validators.required]]
    });
  }

  onSubmit() {
    // console.log(this.form.value);
    // this.loginService.login(this.form.value.email, this.form.value.password);
    this.loginService.login(this.form.value);
  }
}
