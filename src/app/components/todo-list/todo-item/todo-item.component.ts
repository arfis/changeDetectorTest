import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {

  @Input() todo: Todo;

  isDragOver: boolean;

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragExit() {
    this.isDragOver = false;
  }

  get title() {
    console.log('rendering ', this.todo.title);
    return this.todo.title;
  }
}
