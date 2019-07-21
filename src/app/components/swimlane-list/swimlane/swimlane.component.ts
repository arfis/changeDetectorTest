import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css']
})
export class SwimlaneComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

}
