import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/api-models/task.model';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{
  Tasks: Task[] = []
  displayedColumns: string[] = ['description','priority'];
  volunteerId: string | null | undefined;

  dataSource : MatTableDataSource<Task> =  new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private taskService: TasksServiceService,
    private readonly route: ActivatedRoute){}
  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(
      (successResponse) => {
        this.Tasks = successResponse
        this.dataSource = new MatTableDataSource<Task>(this.Tasks);
          if (this.matPaginator){
            this.dataSource.paginator = this.matPaginator;
          }
          if (this.matSort){
            this.dataSource.sort = this.matSort;
          }
      },
      (errorResponse) => {
        console.log("EROARE");
          console.log(errorResponse);
      }
    )

  }

}
