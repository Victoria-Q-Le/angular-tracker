import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import {Task} from '../Task'
// import {TASKS} from '../mock-tasks' - the data are now coming from the backend, so I no longer need the mock data

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5500/tasks'
  // adding a property called apiUrl

  constructor(private http:HttpClient) { }

  // getTasks(): Task [] {
  //   return TASKS;
  // }
  // bring in data directly from a file

  getTasks(): Observable <Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    //Idealy we want to use Observable because we are dealing with asynchronous data fetching from a server
    return this.http.get<Task[]>(this.apiUrl)
    // this is how we get data from a client http/backend
  }
}
