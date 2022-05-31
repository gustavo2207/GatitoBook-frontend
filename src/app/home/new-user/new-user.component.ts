import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExistUserService } from './exist-user.service';
import { lowercaseValidator } from './lowercase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { passwordUserNameSameValidator } from './user-password-same.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existUserService: ExistUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [lowercaseValidator],
          [this.existUserService.alreadyExistUser()],
        ],
        password: [''],
      },
      {
        validators: [passwordUserNameSameValidator],
      }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser: NewUser = this.newUserForm.getRawValue() as NewUser;
      console.log(newUser);
      this.newUserService.registerNewUser(newUser).subscribe({
        next: () => this.router.navigateByUrl(''),
        error: (error) => console.log(error),
        complete: () => console.log('complete'),
      });
    }
  }
}
