import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() num: any;
  @Output() str = new EventEmitter(); //EventEmitter is used to flow data from child to parent.
  framework = 'Angular';
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.str.emit(this.framework); //Here, emit method emits an event containing a value.
  }
}
