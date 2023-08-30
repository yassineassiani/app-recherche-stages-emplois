import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ForgService } from '../sevise/forg.service';
@Injectable({
  providedIn: 'root'
})

export class ForGuard implements CanActivate {
  constructor(private router: Router, private share: ForgService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (this.share.y == true) {
        resolve(true);
      } else {
        this.router.navigate(['/']);
        resolve(false);
      }
    });
  }
};