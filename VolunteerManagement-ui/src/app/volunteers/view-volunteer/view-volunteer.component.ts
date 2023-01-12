import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Volunteer } from 'src/app/models/ui-modules/volunteer.Model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-view-volunteer',
  templateUrl: './view-volunteer.component.html',
  styleUrls: ['./view-volunteer.component.css']
})
export class ViewVolunteerComponent implements OnInit {

  volunteerId: string | null | undefined;
  volunteer: Volunteer = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: 0,
    gender:{
      id: '',
      description:''
    },
    profileImageUrl:''
  }
  constructor(private readonly volunteerService: VolunteerService,
    private readonly route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
        this.volunteerId = params.get('id');
        if (this.volunteerId){
          this.volunteerService.getVolunteer(this.volunteerId)
          .subscribe(
            (succesResponse) => {
              this.volunteer = succesResponse;
            }
          );
        }
      }
    )



  }


}
