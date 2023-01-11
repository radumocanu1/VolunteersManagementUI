import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../models/ui-modules/Volunteer.Model';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent  implements OnInit{

  volunteers : Volunteer[]=[];
  constructor(private volunteerService : VolunteerService){}

  //getListOfStudents
  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe(
      (succesResponse) => {
        console.log(succesResponse[0].firstName)
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }
}
