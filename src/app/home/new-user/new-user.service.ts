import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(protected httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post('http://localhost:3000/user/signup', newUser);
  }

  verifyExistUser(userName: string) {
    this.httpClient.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
