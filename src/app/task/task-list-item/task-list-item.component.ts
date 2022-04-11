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

  newTask!: TaskInterface;

  onEditTask() {
    this.editable = true;

    if (!this.taskName || !this.taskDescription) {
      return;
    }

    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');
  }

  updateTask(task: TaskInterface, newTask: TaskInterface ) {
    if (!newTask.name || !newTask.description) {
      return;
    }
    this.taskService.updateTask(this.taskService.allTasksList.indexOf(task), newTask);
    
    this.editable = false;
    this.addReadonly();
  }

  undoChanges() {
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.value = this.task.name;
    this.taskDescription.nativeElement.value = this.task.description;

    this.editable = false;
    this.addReadonly();
  }

  addReadonly() {
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
  }
}