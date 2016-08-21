import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../models/task';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Output() onComplete: EventEmitter<Task>;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { 
  	this.onComplete = new EventEmitter<Task>();
  }

  ngOnInit() {
  }

  completeTask(task: Task): void{
  	this.onComplete.emit(task);
  }

  deleteTask(task: Task): void{
  	this.onDelete.emit(task);
  }

}
