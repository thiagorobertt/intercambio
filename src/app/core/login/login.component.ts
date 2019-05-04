import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: any;
  @Output() loginComplete = new EventEmitter<boolean>();
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
    this.loginService.login(this.form.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.loginComplete.emit(true);
    });
  }
}
