import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {

  static checkName(control: AbstractControl) {
    const name = control.value as string;
    if (name.includes('test')) {
      return { invalidName: true }
    }
    else {
      return null;
    }
  }


  static checkPassword(form: FormGroup) {
    const password = form.
      get('password').value as string;
    const confirmPassword = form.
      get('confirmPassword').value as string;

    if (password !== confirmPassword) {
      return { passwordInvalid: true }
    } else {
      return null;
    }
  }

}
