import { AbstractControl } from '@angular/forms';

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

}
