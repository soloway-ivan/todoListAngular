import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnChanges} from '@angular/core';
import { TaskInterface } from '../task.interface';
import { TaskService } from '../task.service';
import { StatusEnum } from '../taskStatusType';
import { TaskStatusType } from '../taskStatusType';
import { PriorityEnum } from '../taskPriorityType';
import { TaskPriorityType } from '../taskPriorityType';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent implements OnChanges {
  editable = false;
  showPriorities = false;

  @Input() 
  task!: TaskInterface;

  taskTitleInput!: string;
  taskDescriptionInput!: string;
  taskCommentInput!: string;
  taskStatus: TaskStatusType | undefined;
  taskPriority: TaskPriorityType | undefined;

  ngOnChanges(changes:any) {
    if (changes['task']) {
      this.taskTitleInput = this.task.title;
      this.taskDescriptionInput = this.task.description;
      this.taskCommentInput = this.task.comment;
      this.taskStatus = this.task.status;
      this.taskPriority = this.task.priority;
    }
  }

  @ViewChild('taskName')
  taskName: ElementRef | undefined;

  @ViewChild('taskDescription')
  taskDescription: ElementRef | undefined;

  @ViewChild('taskComment')
  taskComment: ElementRef | undefined;

  @Output() 
  save = new EventEmitter<TaskInterface>();

  @Output()
  delete = new EventEmitter<TaskInterface>();

  onDelete(): void {
    this.delete.emit(this.task);
  }

  onSave(): void {
    const newTask: TaskInterface = {
      title: this.taskTitleInput,
      description: this.taskDescriptionInput,
      comment: this.taskCommentInput,
      priority: this.taskPriority,
      status: this.taskStatus,
      id: this.task.id,
    }
    this.save.emit(newTask);
    this.addReadonly();
  }

  onEditTask(): void  {
    this.editable = true;
    if (!this.taskName || !this.taskDescription || !this.taskComment) {
      return;
    }
    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');
    this.taskComment.nativeElement.removeAttribute('readonly');
  }
  
  undoChanges(): void  {
    if (!this.taskName || !this.taskDescription || !this.taskComment) {
      return;
    }
    this.taskTitleInput = this.task.title;
    this.taskDescriptionInput = this.task.description;
    this.taskCommentInput = this.task.comment
    this.taskStatus = this.task.status;
    this.taskPriority = this.task.priority;
    this.addReadonly();
  }

  addReadonly(): void  {
    this.editable = false;
    if (!this.taskName || !this.taskDescription || !this.taskComment) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
    this.taskComment.nativeElement.setAttribute('readonly', true);
  }

  getNextStateIndex(): TaskStatusType {
    let types = Object.values(StatusEnum);
    let indexOfNextState = 0;

    types.forEach((state, indexOfCurrentState) => {
      if (state === this.taskStatus) {
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

  getBackgroundColor(): string | undefined {
    let result: string | undefined;
    switch (this.taskStatus) {
      case StatusEnum.toDo:
        result = 'inherit';
        break;
      case StatusEnum.inProgress:
        result = 'violet';
        break;
      case StatusEnum.done:
        result = 'green';
        break;
    }
    return result;
  }

  get priorities() {
    const arr = Object.entries(PriorityEnum);
    return arr.map(([title, color]) => ({ title, color }));
  }

  changeTaskPriority(priority: any) {
    this.taskPriority = priority.title;
    this.showPriorities = false;
  }

  getColor() {
    let result: string | undefined;
    switch (this.taskPriority) {
      case "Urgent":
        result = PriorityEnum.Urgent;
        break;
      case "Heigh":
        result = PriorityEnum.Heigh;
        break;
      case "Medium":
        result = PriorityEnum.Medium;
        break;
      case "Low":
        result = PriorityEnum.Low;
        break;
    }
    return result;
  }

  showPriorityList() {
    if (this.editable) {
      this.showPriorities=true;
    }
  }
}