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
