import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { reduce } from 'rxjs';
import { TaskInterface } from '../task.interface';
import { TaskService } from '../task.service';
import { StatusEnum } from '../taskStatusType';
import { TaskStatusType } from '../taskStatusType';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent implements OnChanges {
  editable = false;

  @Input() 
  task!: TaskInterface;

  taskTitleInput!: string;
  taskDescriptionInput!: string;
  taskStatus!: TaskStatusType;

  ngOnChanges(changes:any) {
    if (changes['task']) {
      this.taskTitleInput = this.task.title;
      this.taskDescriptionInput = this.task.description;
      this.taskStatus = this.task.status;
    }
  }

  @ViewChild('taskName')
  taskName: ElementRef | undefined;

  @ViewChild('taskDescription')
  taskDescription: ElementRef | undefined;

  @Output() save = new EventEmitter<TaskInterface>();

  @Output()
  delete = new EventEmitter<TaskInterface>();

  onDelete(): void {
    this.delete.emit(this.task);
  }

  onSave(): void {
    const newTask: TaskInterface = {
      title: this.taskTitleInput,
      description: this.taskDescriptionInput,
      status: this.taskStatus,
      comment: '',
      id: this.task.id,
    }
    this.save.emit(newTask);
    this.addReadonly();
  }

  onEditTask(): void  {
    this.editable = true;
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');
  }
  
  undoChanges(): void  {
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskTitleInput = this.task.title;
    this.taskDescriptionInput = this.task.description;
    this.taskStatus = this.task.status;
    this.addReadonly();
  }

  addReadonly(): void  {
    this.editable = false;
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
  }

  getNextStateIndex(): TaskStatusType {
    let types = Object.values(StatusEnum);
    let indexOfNextState = 0;
    types.forEach((state, index) => {
      if (state === this.taskStatus) {
        let indexOfCurrentState = index;
        indexOfNextState = indexOfCurrentState + 1;
        if (indexOfNextState > types.length - 1) {
          indexOfNextState = 0;
        }
      }
    });   
    return types[indexOfNextState];
  }

  changeStatus(): TaskStatusType | undefined {
    if (!this.editable) return;
    let state = this.getNextStateIndex();
    return this.taskStatus = state;
  }

  getBackgroundColor(): string {
    return (this.taskStatus === StatusEnum.toDo) ? 'inherit' : 
              (this.taskStatus === StatusEnum.inProgress) ? 'violet' : 
                (this.taskStatus === StatusEnum.done) ? 'green' : 'inherit';
  }

  getFontSize(): string {
    return (this.taskStatus.length >= 11) ? '15px' : '18px';
  }
}