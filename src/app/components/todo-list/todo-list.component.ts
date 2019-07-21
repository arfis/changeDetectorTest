import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, NgZone, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

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

  @HostListener('window:click', ['$event'])
  onClick(event) {
    this.zone.runOutsideAngular(() => {
      console.log('click event');
    })
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
    this.removeChangeDetector();
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
