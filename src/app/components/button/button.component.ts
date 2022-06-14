import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string; // ran into err TS 2564: on initializer and not definitely assigned in the constructor. Compiler was silenced by stating the variable may be optional.
  @Input() color?: string;

  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit()

  }




}
