import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add a task!');
      return;
    }
  }

}
// in order to use form, all the properties have to be declared in the component, we also brough in the Forms Module in the app.module.ts
