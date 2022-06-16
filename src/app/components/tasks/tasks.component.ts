import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
//bring in the interface
import {TASKS} from '../../mock-tasks'
//bring in the mock data, this will be sub by json data later on

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  //task is a assigned property is the task component
  constructor() { }

  ngOnInit(): void {
  }

}
