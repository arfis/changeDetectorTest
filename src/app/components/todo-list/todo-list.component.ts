import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgZone,
  OnInit,
  Output
} from '@angular/core';
import { Todo } from '../../models/todo.model';
import * as uuid from 'uuid';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() id;

  todos: Todo[] = [
    {
      title: 'Upratat kuchynu',
      description: 'Upratat celu kuchynu, vycitstit dress',
      done: false
    },
    {
      title: 'Upratat kupenu',
      description: 'Upratat celu kuchynu, vycitstit dress',
      done: true
    },
    {
      title: 'Upratat obyvacku',
      description: 'Upratat celu kuchynu, vycitstit dress',
      done: false
    },
  ];

  selectedTodoIndex: number;
  addingInterval: any;
  changeDetectorStatus: string;
  dragableItem: any;

  @Output() todoDragStart = new EventEmitter<Todo>();

  @HostListener('window:click', ['$event'])
  onClick(event) {
    this.zone.runOutsideAngular(() => {
      console.log('click event');
    });
  }

  @HostListener('drop', ['$event'])
  onDropAction(event) {
    console.log('on drop ', event);
    const droppedData = JSON.parse(event.dataTransfer.getData('json'));
    this.todos = [
      ...this.todos,
      droppedData
    ]
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    console.log('drag over');
    event.preventDefault();
  }

  constructor(private zone: NgZone,
              private changeDetector: ChangeDetectorRef) {
  }

  toggleChangeDetector() {
    if (this.changeDetectorStatus === 'on') {
      this.removeChangeDetector();
    } else {
      this.addChangeDetector();
    }
  }

  ngOnInit() {
    // this.removeChangeDetector();
  }

  toggleTodo() {
    if (this.selectedTodoIndex) {
      this.todos[this.selectedTodoIndex].done = !this.todos[this.selectedTodoIndex].done;
    }
  }

  outsideZonesAddTodo() {
    this.zone.runOutsideAngular(
      () => {
        setInterval(() => {
          this.todos.push({
            title: 'Nova praca',
            description: 'sprav blablabla',
            done: false
          });
        }, 200);
      }
    );
  }

  toggleAddingTodo() {
    if (!this.addingInterval) {
      this.addingInterval = setInterval(() => {
        this.todos.push({
          title: 'Nova praca',
          description: 'sprav blablabla',
          done: false
        });
      }, 1000);
    } else {
      clearInterval(this.addingInterval);
    }
  }

  selectTodo(index) {
    this.selectedTodoIndex = index;
    if (!this.isChangeDetectorOn) {
      console.log('invoking change detection');
      this.changeDetector.detectChanges();
    }
  }

  onDragStart(event: DragEvent, item: Todo) {
    this.dragableItem = item;
    event.dataTransfer.setData('json', JSON.stringify(item));
    this.todoDragStart.next({...item});
  }

  onDragEnd() {
    this.todos = [
      ...this.todos.filter(todo => todo !== this.dragableItem)
    ];
  }


  get isChangeDetectorOn() {
    return this.changeDetectorStatus === 'on';
  }

  private addChangeDetector() {
    this.changeDetector.reattach();
    this.changeDetectorStatus = 'on';
  }

  private removeChangeDetector() {
    this.changeDetectorStatus = 'off';
    this.changeDetector.detectChanges();
    this.changeDetector.detach();
  }
}
