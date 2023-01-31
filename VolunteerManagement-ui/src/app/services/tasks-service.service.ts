import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/api-models/task.model';
import { TaskUI } from '../models/ui-modules/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  private baseApiUrl = 'https://localhost:44389';

  constructor(private httpClient: HttpClient) { }

  getTasks(volunteerID : String): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.baseApiUrl + '/Volunteers/tasks/' + volunteerID)
  }
  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>((this.baseApiUrl) + '/ToDo');
  }
}
