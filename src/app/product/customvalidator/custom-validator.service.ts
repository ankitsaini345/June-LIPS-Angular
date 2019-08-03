import {
  AbstractControl, FormGroup,
  ValidationErrors
} from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  static checkSpecialChars(chars: string) {
    return (control: AbstractControl):
      ValidationErrors | null => {
      const name = control.value as string;
      if (name.includes(chars)) {
        return { invalidCharInName: true }
      }
      else {
        return null;
      }
    }
  }


  static checkSeller(productService: ProductService) {
    return (control: AbstractControl):
      Observable<ValidationErrors | null> => {
      const email = control.value as string;

      return productService.checkSeller().pipe(
        map((emails) => emails.indexOf(email)
          !== 0 ? null : { duplicateEmail: true })
      );

    }
  }




  static checkPassword(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ invalidPassword: true });
      return { passwordInvalid: true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }

}
