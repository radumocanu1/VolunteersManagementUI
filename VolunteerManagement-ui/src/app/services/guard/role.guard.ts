import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/api-models/roles-model';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate()
  {
    if (localStorage.getItem('role') === 'admin')
    {
      return true;
    }
    alert("You are not logged in as an admin!");
    return false;
  }


}
