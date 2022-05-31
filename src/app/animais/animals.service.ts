import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animals } from './animal';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(userName: string): Observable<Animals> {
    const token = this.tokenService.tokenReturn();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`, {
      headers,
    });
  }
}
