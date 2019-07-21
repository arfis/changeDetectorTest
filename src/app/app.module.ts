import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { TodoDescriptionComponent } from './components/todo-list/todo-item/todo-description/todo-description.component';
import { SwimlaneListComponent } from './components/swimlane-list/swimlane-list.component';
import { SwimlaneComponent } from './components/swimlane-list/swimlane/swimlane.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDescriptionComponent,
    SwimlaneListComponent,
    SwimlaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
