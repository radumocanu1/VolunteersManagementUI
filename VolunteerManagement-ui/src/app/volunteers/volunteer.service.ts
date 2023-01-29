import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/api-models/volunteer.model';
import { updateVolunteer } from '../models/api-models/update-volunteer.model';
import { VolunteerUI } from '../models/ui-modules/volunteerUI.model';
import { addVolunteer } from '../models/api-models/add-volunteer.model';
import { addVolunteerUI } from '../models/ui-modules/add-volunteer.model';
import { VolunteerAdmin } from '../models/api-models/volunteerAdmin.model';
import { VolunteerUIAdmin } from '../models/ui-modules/volunteerUIadmin.model';

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
  getVolunteerAdmin(volunteerId: string): Observable<VolunteerAdmin>{
    return this.httpClient.get<VolunteerAdmin>(this.baseApiUrl + '/volunteers/admin/' + volunteerId)
  }
  updateVolunteer(volunteerId: string, volunteerRequest: VolunteerUIAdmin): Observable<Volunteer>{
    const updateVolunteer: updateVolunteer = {
      firstName: volunteerRequest.firstName,
      lastName: volunteerRequest.lastName,
      dateOfBirth: volunteerRequest.dateOfBirth,
      email: volunteerRequest.email,
      phoneNumber: volunteerRequest.phoneNumber,
      genderId: volunteerRequest.gender.id,
      profileImageUrl: volunteerRequest.profileImageUrl,
      physicalAddress: volunteerRequest.address.physicalAddress,
      postalAddress: volunteerRequest.address.postalAddress
    };
    let headers = new HttpHeaders()
    headers=headers.append('Authorization', localStorage.getItem('token')!);
    return this.httpClient.put<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId, updateVolunteer, { 'headers': headers });
  };
  deleteVolunteer(volunteerId: string): Observable<Volunteer>{
    return this.httpClient.delete<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId);
  }
  addVolunteer(addVolunteer: VolunteerUIAdmin): Observable<Volunteer>{
    const newVolunteer: addVolunteer = {
      firstName: addVolunteer.firstName,
      lastName: addVolunteer.lastName,
      dateOfBirth: addVolunteer.dateOfBirth,
      email: addVolunteer.email,
      phoneNumber: addVolunteer.phoneNumber,
      genderId: addVolunteer.gender.id,
      profileImageUrl: addVolunteer.profileImageUrl,
      physicalAddress: addVolunteer.address.physicalAddress,
      postalAddress: addVolunteer.address.postalAddress
    };
    return this.httpClient.post<Volunteer>(this.baseApiUrl + '/volunteers/Add', newVolunteer);

  }

}
