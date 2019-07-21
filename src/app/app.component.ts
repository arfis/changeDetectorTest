import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'renderTest';

  swimlines = [{
    title: 'New'
  },
    {
      title: 'Work in progress'
    }, {
      title: 'Done'
    }];

  stopDragging(item: Todo) {
    console.log('stop dragging ', item);
  }

  startDragging(item: Todo) {
    console.log('start dragging ', item);
  }
}
