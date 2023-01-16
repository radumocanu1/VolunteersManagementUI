import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/api-models/volunteer.model';
import { updateVolunteer } from '../models/api-models/update-volunteer.model';
import { VolunteerUI } from '../models/ui-modules/volunteerUI.model';
import { addVolunteer } from '../models/api-models/add-volunteer.model';
import { addVolunteerUI } from '../models/ui-modules/add-volunteer.model';
import { VolunteerAdmin } from '../models/api-models/volunteerAdmin.model';

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
  updateVolunteer(volunteerId: string, volunteerRequest: VolunteerUI): Observable<Volunteer>{
    const updateVolunteer: updateVolunteer = {
      firstName: volunteerRequest.firstName,
      lastName: volunteerRequest.lastName,
      dateOfBirth: volunteerRequest.dateOfBirth,
      email: volunteerRequest.email,
      phoneNumber: volunteerRequest.phoneNumber,
      genderId: volunteerRequest.gender.id,
      profileImageUrl: volunteerRequest.profileImageUrl
    };
    return this.httpClient.put<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId, updateVolunteer);
  };
  deleteVolunteer(volunteerId: string): Observable<Volunteer>{
    return this.httpClient.delete<Volunteer>(this.baseApiUrl + '/volunteers/' + volunteerId);
  }
  addVolunteer(addVolunteer: addVolunteerUI): Observable<Volunteer>{
    const newVolunteer: addVolunteer = {
      firstName: addVolunteer.firstName,
      lastName: addVolunteer.lastName,
      dateOfBirth: addVolunteer.dateOfBirth,
      email: addVolunteer.email,
      phoneNumber: addVolunteer.phoneNumber,
      genderId: addVolunteer.genderId,
      profileImageUrl: addVolunteer.profileImageUrl,
      physicalAddress: addVolunteer.physicalAddress,
      postalAddress: addVolunteer.postalAddress
    };
    return this.httpClient.post<Volunteer>(this.baseApiUrl + '/volunteers/Add', newVolunteer);

  }

}
