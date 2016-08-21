import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../models/task';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css'],
  outputs: ["onAddTask"]
})
export class TaskFormComponent implements OnInit {
  newAction: string;
  newPriority: number;
  newEstHours: number;
  onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask(event: any): void{
  	this.onAddTask.emit(new Task(this.newAction, this.newPriority, this.newEstHours));
  	this.newAction = null;
  	this.newPriority = null;
  	this.newEstHours = null;
  }

}
