import { UserService } from 'src/app/autenticacao/user/user.service';
import { AnimalsService } from './../animals.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { Animals } from '../animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsListResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.userReturn().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      }),
      take(1)
    );
  }
}
