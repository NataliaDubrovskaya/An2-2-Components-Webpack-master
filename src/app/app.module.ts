import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoAppComponent } from './app.component';
import { TaskListComponent } from './components/task-list';
import { TaskComponent } from './components/task';
import { TaskFormComponent } from './components/task-form';
import { TodoAppHeaderComponent } from './components/todo-app-header';

@NgModule({
  declarations: [
    TodoAppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    TodoAppHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [TodoAppComponent],
  bootstrap: [TodoAppComponent]
})
export class AppModule {

}
