import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Gender } from 'src/app/models/ui-modules/gender.model';
import { VolunteerUI } from 'src/app/models/ui-modules/volunteerUI.model';
import { GenderService } from 'src/app/services/gender.service';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-view-volunteer',
  templateUrl: './view-volunteer.component.html',
  styleUrls: ['./view-volunteer.component.css']
})
export class ViewVolunteerComponent implements OnInit {

  volunteerId: string | null | undefined;
  volunteer: VolunteerUI = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender:{
      id: '',
      description:''
    },
    profileImageUrl:''
  }

  genderList: Gender[] = [];
  constructor(private readonly volunteerService: VolunteerService,
    private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackbar: MatSnackBar  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
        this.volunteerId = params.get('id');
        if (this.volunteerId){
          this.volunteerService.getVolunteer(this.volunteerId)
          .subscribe(
            (succesResponse) => {
              this.volunteer = succesResponse;
              console.log(succesResponse);
            }
          );
          this.genderService.getGenderList()
          .subscribe(
            (succesResponse) => {
              this.genderList = succesResponse;
            }
          )
        }
      }
    )



  }
  onUpdate(): void{
    this.volunteerService.updateVolunteer(this.volunteer.id, this.volunteer)
    .subscribe(
      (succesResponse) => {
          this.snackbar.open('Volunteer updated succesfully!', undefined, {
            duration: 2000
          });
          console.log(succesResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

}
