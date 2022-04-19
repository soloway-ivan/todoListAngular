import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { TaskInterface } from '../task.interface';
import { TaskService } from '../task.service';
import { StatusEnum } from '../taskStatusType';


@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent implements OnChanges {
  constructor(private taskService: TaskService) {}

  editable = false;

  @Input() 
  task!: TaskInterface;

  taskTitleInput!: string;
  taskDescriptionInput!: string;

  ngOnChanges(changes:any) {
    if (changes['task']) {
      this.taskTitleInput = this.task.title;
      this.taskDescriptionInput = this.task.description;
    }
  }

  @ViewChild('taskName')
  taskName: ElementRef | undefined;

  @ViewChild('taskDescription')
  taskDescription: ElementRef | undefined;

  @Output() save = new EventEmitter();

  onSave(): void {
    const newTask: TaskInterface = {
      title: this.taskTitleInput,
      description: this.taskDescriptionInput,
      status: StatusEnum.toDo,
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
}