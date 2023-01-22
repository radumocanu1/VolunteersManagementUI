import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/api-models/Auth-user.model';
import { UserUI } from '../models/ui-modules/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseApiUrl = 'https://localhost:44389';


  constructor(private httpClient: HttpClient) { }

  getAuthToken(username :string, password:string): Observable<UserUI>{
    const authUser: AuthUser = {
      username: username,
      password: password
    };
    return this.httpClient.post<UserUI>(this.baseApiUrl + '/User/authenticate', authUser);

  }


}
