import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { addVolunteerUI } from 'src/app/models/ui-modules/add-volunteer.model';
import { Gender } from 'src/app/models/ui-modules/gender.model';
import { VolunteerUI } from 'src/app/models/ui-modules/volunteerUI.model';
import { VolunteerUIAdmin } from 'src/app/models/ui-modules/volunteerUIadmin.model';
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
  volunteerAdmin: VolunteerUIAdmin = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender: {
      id: '',
      description: ''
    },
    profileImageUrl: '',
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    }
  }

  isNewVolunteer = true;
  header = "";
  isAdmin = false;
  genderList: Gender[] = [];
  constructor(private readonly volunteerService: VolunteerService,
    private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackbar: MatSnackBar,
    private router: Router  ) {}
  ngOnInit(): void {
    if (this.route.snapshot.routeConfig?.path?.length === 20)
    {
      console.log("admin");
      this.isAdmin = true;
    }
    else
    {
      this.isAdmin = false;
    }
    this.route.paramMap.subscribe(
      (params) =>{
        this.volunteerId = params.get('id');
        if (this.volunteerId){


          // create volunteer
          if (this.volunteerId.toLowerCase() === 'Add'.toLowerCase())
          {
            this.isAdmin = true;
            this.isNewVolunteer = true;
            this.header = "Add new Volunteer";

            this.genderService.getGenderList()
          .subscribe(
            (succesResponse) => {
              this.genderList = succesResponse;
            }
          )
          }
          //display existing volunteer by id  for nonAdmin( the route does not contain the keyword add)
          else if (this.isAdmin === false)
          {
            this.isNewVolunteer = false;
            this.header = "Volunteer Details";



            this.volunteerService.getVolunteer(this.volunteerId)
          .subscribe(
            (succesResponse) => {
              this.volunteer = succesResponse;
              console.log(this.volunteerId);
            }
          );
          this.genderService.getGenderList()
          .subscribe(
            (succesResponse) => {
              this.genderList = succesResponse;
            }
          )
          }
          else
          {
            this.isNewVolunteer = false;
            this.header = "Volunteer Details";
            this.volunteerService.getVolunteerAdmin(this.volunteerId)
          .subscribe(
            (succesResponse) => {
              this.volunteerAdmin = succesResponse;
              console.log(this.volunteerId);
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
      }
    )



  }
  onUpdate(): void{
    this.volunteerService.updateVolunteer(this.volunteerAdmin.id, this.volunteerAdmin)
    .subscribe(
      (succesResponse) => {
          this.snackbar.open('Volunteer updated successfully!', undefined, {
            duration: 2000
          });
          console.log(succesResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  onDelete(): void{

    this.volunteerService.deleteVolunteer(this.volunteerAdmin.id)
    .subscribe(
      (succesResponse) => {
        this.snackbar.open('Volunteer deleted!', undefined, {
          duration: 2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('volunteers/admin');
        }, 2000);

      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    )


  }
  onAdd(): void{
    this.volunteerService.addVolunteer(this.volunteerAdmin)
    .subscribe(
      (succesResponse) => {
        this.snackbar.open('Volunteer added successfully!', undefined, {
          duration: 2000
        });
        setTimeout(() => {
          this.router.navigateByUrl(`volunteers/admin/${succesResponse.id}`);
        }, 2000);
        console.log(succesResponse);
      }
    )
  }


}
