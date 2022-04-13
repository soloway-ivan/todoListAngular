import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { TaskInterface } from '../task.interface';
import { TaskService } from '../task.service';

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

  taskNameInput!: string;
  taskDescriptionInput: string | undefined;

  ngOnChanges(changes:any) {
    if (changes['task']) {
      this.taskNameInput = this.task.name;
      this.taskDescriptionInput = this.task.description;
    }
  }

  @ViewChild('taskName')
  taskName: ElementRef | undefined;

  @ViewChild('taskDescription')
  taskDescription: ElementRef | undefined;

  @Output() save = new EventEmitter();

  onSave() {
    const newTask: TaskInterface = {
      name: this.taskNameInput,
      description: this.taskDescriptionInput,
      ID: this.task.ID,
    }    
    this.save.emit(newTask);
    this.addReadonly();
  }

  onEditTask() {
    this.editable = true;
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.removeAttribute('readonly');
    this.taskDescription.nativeElement.removeAttribute('readonly');
  }
  
  undoChanges() {
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskNameInput = this.task.name;
    this.taskDescriptionInput = this.task.description;
    this.addReadonly();
  }

  addReadonly() {
    this.editable = false;
    if (!this.taskName || !this.taskDescription) {
      return;
    }
    this.taskName.nativeElement.setAttribute('readonly', true);
    this.taskDescription.nativeElement.setAttribute('readonly', true);
  }
}