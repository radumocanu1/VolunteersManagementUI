import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Volunteer } from '../models/ui-modules/volunteer.Model';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent  implements OnInit{

  volunteers : Volunteer[]=[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'phoneNumber', 'gender'];

  dataSource : MatTableDataSource<Volunteer> =  new MatTableDataSource<Volunteer>();

  constructor(private volunteerService : VolunteerService){}

  //getListOfStudents
  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe(
      (succesResponse) => {
        this.volunteers = succesResponse;
        this.dataSource = new MatTableDataSource<Volunteer>(this.volunteers);
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }
}
