import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root',
})
export class ExistUserService {
  constructor(private newUserService: NewUserService) {}

  alreadyExistUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(async (userName) =>
          this.newUserService.verifyExistUser(userName.trim())
        ),
        map((existUser) => (existUser!! ? { userExist: true } : null)),
        first()
      );
    };
  }
}
