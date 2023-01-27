import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly route: Router,
    private authService: AuthService,

  ){}
  canActivate()
  {
    if(this.authService.IsLoggedIn())
    {
      return true;
    }
   alert("You Don't Have Permission to Access this page");
    this.route.navigateByUrl('user/authentificate');
    return false;
  }

}
