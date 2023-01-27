import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createdUser } from '../models/api-models/createdUser.model';
import { CreateUser } from '../models/ui-modules/createUser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseApiUrl = 'https://localhost:44389';

  constructor(private httpClient: HttpClient) { }

  registerUser(createUser: CreateUser): Observable<createdUser>{
    return this.httpClient.post<createdUser>(this.baseApiUrl + '/User/create/user', createUser);
  }
}
