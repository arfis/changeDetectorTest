import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }


  get title() {
    console.log('rendering ', this.todo.title);
    return this.todo.title;
  }
}
