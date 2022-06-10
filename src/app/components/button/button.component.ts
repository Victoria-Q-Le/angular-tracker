import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string; // ran into err TS 2564: on initializer and not definitely assigned in the constructor. I silenced the compiler by stating the variable may be optional,
  @Input() color?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Task Added');

  }

}
