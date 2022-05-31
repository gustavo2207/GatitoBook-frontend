import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(protected httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }

  verifyExistUser(userName: string) {
    this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
