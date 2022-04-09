import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskInterface } from '../task.interface';

import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TaskInterface } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent {

  constructor(private taskService: TaskService) { }

  @Input()
  task!: TaskInterface;

  @ViewChild('taskName')
  taskName: ElementRef | undefined;

  @ViewChild('taskDescription')
  taskDescription: ElementRef | undefined;

  editable = false;

  onEditTask() {
    this.editable = true;

    if (!this.taskName || !this.taskDescription) {
      return;
    }

    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');

    console.log(this.taskService.allTasksList);

  }

  updateTask(name: string, description: string): TaskInterface {
    this.editable = false;

    this.addReadonly();


    return {
      name: name,
      description: description,
      comment: '',
      done: false
    }
  }

  addReadonly() {
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
  }

  undoChanges(): TaskInterface {
    console.log(this.task);

    this.editable = false;
    this.addReadonly();
    return {
      name: this.task.name,
      description: this.task.description,
      comment: '',
      done: false
    }
  }