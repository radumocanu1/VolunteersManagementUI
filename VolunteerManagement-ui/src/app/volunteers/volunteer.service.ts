import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/api-models/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private baseApiUrl = 'https://localhost:44389';
  constructor(private httpClient: HttpClient) { }

  getVolunteers(): Observable<Volunteer[]>{
    return this.httpClient.get<Volunteer[]>(this.baseApiUrl + '/volunteers')
  }
  getVolunteer(volunteerId: string): Observable<Volunteer>{
    return this.httpClient.get<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId)
  }
}
