import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/autenticacao/user/user';
import { UserService } from 'src/app/autenticacao/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$ = this.userService.userReturn();

  constructor(private userService: UserService, private router: Router) {}

  onChange() {
    const user = this.user$ as User;
    console.log(user.name);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
