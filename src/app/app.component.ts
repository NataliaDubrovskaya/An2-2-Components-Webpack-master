import { Component, OnInit } from '@angular/core';
import { Task } from './components/models/task';
import { TaskListComponent } from './components/task-list';
import { TodoAppHeaderComponent } from './components/todo-app-header';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TaskListComponent, TodoAppHeaderComponent]
})
export class TodoAppComponent implements OnInit {
  title = 'Todo app works!';
  tasks: Array<Task>;

  ngOnInit(){
  	this.tasks = [
  		new Task("Create",1,8),
  		new Task("Delete",2,4),
  		new Task("Update",3,2)
  	];
  }

  completeTask(task: Task): void{
  	task.done = true;
  }

  addNewTask(task: Task): void{
  	this.tasks.push(task);
  }

  deleteTask(task: Task): void{
  	var index = this.tasks.indexOf(task);
	if (index > -1) {
    	this.tasks.splice(index, 1);
    }
  }

  countDoneTasks(): number{
  	return this.tasks.filter(t => t.done === true).length;
  }

  countUndoneTasks(): number{
  	return this.tasks.filter(t => t.done === false).length;
  }
}
