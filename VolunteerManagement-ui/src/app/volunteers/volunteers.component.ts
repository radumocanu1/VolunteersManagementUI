import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VolunteerUI } from '../models/ui-modules/volunteerUI.model';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',

  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent  implements OnInit{

  volunteers : VolunteerUI[]=[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'phoneNumber', 'gender', 'edit'];

  dataSource : MatTableDataSource<VolunteerUI> =  new MatTableDataSource<VolunteerUI>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private volunteerService : VolunteerService){}

  //getListOfStudents
  ngOnInit(): void {
    this.volunteerService.getVolunteers().subscribe(
      (succesResponse) => {
        this.volunteers = succesResponse;
        this.dataSource = new MatTableDataSource<VolunteerUI>(this.volunteers);
        if (this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }
        if (this.matSort){
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }

  filterVolunteers(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
