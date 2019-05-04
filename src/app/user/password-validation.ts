import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const password: string = AC.get('password').value; // to get value in input tag
    const confirmPassword: string = AC.get('confirmPassword').value; // to get value in input tag
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ MatchPassword: true });
      return false;
    }
    return true;
  }
}
