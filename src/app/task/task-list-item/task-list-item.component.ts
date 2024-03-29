import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { TaskInterface } from '../task.interface';
import { StatusEnum } from '../taskStatusType';
import { TaskStatusType } from '../taskStatusType';
import { TaskPriorityTitle } from '../task.constants';
import { TaskPriorityColor } from '../task.constants';
import { TaskPriorityData } from '../task.constants';
import { TaskPriorityInterface } from '../taskPriority.interface';

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
  taskPriority: string | undefined;

  ngOnChanges(changes: any) {
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

  onEditTask(): void {
    this.editable = true;
    if (!this.taskName || !this.taskDescription || !this.taskComment) {
      return;
    }
    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');
    this.taskComment.nativeElement.removeAttribute('readonly');
  }

  undoChanges(): void {
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

  addReadonly(): void {
    this.editable = false;
    if (!this.taskName || !this.taskDescription || !this.taskComment) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
    this.taskComment.nativeElement.setAttribute('readonly', true);
  }

  getNextStatusIndex(): TaskStatusType | undefined {
    let types: StatusEnum[] = Object.values(StatusEnum);
    if (!this.taskStatus) {
      return;
    }
    let indexOfNextStatus = types.indexOf(this.taskStatus) + 1;
    if (indexOfNextStatus > types.length - 1) {
        indexOfNextStatus = 0;
      }
    return types[indexOfNextStatus];
  }

  changeStatus(): void {
    if (!this.editable) return;
    this.taskStatus = this.getNextStatusIndex();
  }

  getBackgroundColor(): string | undefined {
    let result: string | undefined;
    switch (this.taskStatus) {
      case StatusEnum.toDo:
        return result = 'inherit';
      case StatusEnum.ongoing:
        return result = 'violet';
      case StatusEnum.done:
        return result = 'green';
    }
    return result;
  }

  get priorities(): TaskPriorityInterface[] {
    return TaskPriorityData;
  }

  changeTaskPriority(priority: TaskPriorityInterface): void {
    this.taskPriority = priority.title;
    this.showPriorities = false;
  }

  getPriorityColor(): string | undefined {
    let priorityColor: string | undefined;
    switch (this.taskPriority) {
      case TaskPriorityTitle.Urgent:
        return priorityColor = TaskPriorityColor.Urgent;
      case TaskPriorityTitle.Height:
        return priorityColor = TaskPriorityColor.Height;
      case TaskPriorityTitle.Medium:
        return priorityColor = TaskPriorityColor.Medium;
      case TaskPriorityTitle.Low:
        return priorityColor = TaskPriorityColor.Low;
    }
    return priorityColor;
  }

  showPriorityList(): void {
    if (this.editable) {
      this.showPriorities = true;
    }
  }
}