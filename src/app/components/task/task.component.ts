import { Component, OnInit, EventEmitter } from '@angular/core';
import { Task } from './../models/task';

@Component({
  selector: 'task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  inputs: ["task"],
  outputs: ["onComplete", "onDelete"]
})
export class TaskComponent implements OnInit {
  task: Task;
  onComplete: EventEmitter<Task> = new EventEmitter<Task>();
  onDelete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  completeTask(event: any): void{
  	this.onComplete.emit(this.task);
  }

  deleteTask(event: any): void{
  	this.onDelete.emit(this.task);
  }
}
