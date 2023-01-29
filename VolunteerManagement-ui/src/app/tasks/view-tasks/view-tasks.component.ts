import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/api-models/task.model';
import { TaskUI } from 'src/app/models/ui-modules/task.model';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit{
  tasks: Task[] = []
  displayedColumns: string[] = ['description','priority'];
  volunteerId: string | null | undefined;

  dataSource : MatTableDataSource<Task> =  new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private taskService: TasksServiceService,
    private readonly route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.volunteerId = params.get('id');
        if (this.volunteerId)
        {
          this.taskService.getTasks(this.volunteerId).subscribe(
            (successResponse) => {
              console.log("SUCCES");
              this.tasks = successResponse;
              console.log(this.tasks);
              this.dataSource = new MatTableDataSource<Task>(this.tasks);
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
    )
  }

}
