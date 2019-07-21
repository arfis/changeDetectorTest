import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../../models/todo.model';

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.css']
})
export class TodoDescriptionComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  get description() {
    console.log('rendering description ', this.todo.title);
    return this.todo.description;
  }
}
