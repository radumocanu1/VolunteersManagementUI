import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/api-models/volunteer.model';
import { updateVolunteer } from '../models/api-models/update-volunteer.model';
import { VolunteerUI } from '../models/ui-modules/volunteerUI.model';

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
  updateVolunteer(volunteerId: string, volunteerRequest: VolunteerUI): Observable<Volunteer>{
    const updateVolunteer: updateVolunteer = {
      firstName: volunteerRequest.firstName,
      lastName: volunteerRequest.lastName,
      dateOfBirth: volunteerRequest.dateOfBirth,
      email: volunteerRequest.email,
      phoneNumber: volunteerRequest.phoneNumber,
      genderId: volunteerRequest.gender.id,
      profileImageUrl: volunteerRequest.profileImageUrl
    }
    return this.httpClient.put<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId, updateVolunteer);
  };
}
