import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordNotMatch(regx: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const passwordControl = control.parent?.get('password');
    if (passwordControl && control.value.trim() !== passwordControl.value.trim()) {
      return { 'PasswordNotMatch': true };
    }
    const passnotmatch = regx.test(control.value);
    return passnotmatch ? { 'PasswordNotMatch': true } : null;
  };
}
