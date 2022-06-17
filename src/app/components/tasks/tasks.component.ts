import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from '../../Task'
//bring in the interface
// import {TASKS} from '../../mock-tasks'
//bring in the mock data, this will be sub by json data later on. services folder was created

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  //task is a assigned property is the task component
  constructor(private taskService: TaskService) { }
 //in order to user the service, I added it as the provider inside the constructor, private meaning I only use it from here
  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks()

    this.taskService
      .getTasks()
      .subscribe((tasks) => (this.tasks = tasks));
    // getTasks now is a Observable, so we have to subcribe to it. this is like a promise .then() the return value (now tasks ) will be set equal to the tasks we got back from the observale
  }
  // this will be fired off right away as I left it in ngOnInit

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)))
  }
  // similar to getTasks, I changed this to deleteTask with specific task as an argument. This wont give me anything back but I want such task to disappear from the UI by filter it out. Therefore the return tasks are not equal to the id of the deleted task.
}
