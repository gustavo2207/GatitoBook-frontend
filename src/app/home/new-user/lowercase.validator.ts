import { AbstractControl } from '@angular/forms';

export function lowercaseValidator(control: AbstractControl) {
  const value: string = control.value as string;

  if (value !== value.toLowerCase()) {
    return { lowercase: true };
  } else {
    return null;
  }
}
