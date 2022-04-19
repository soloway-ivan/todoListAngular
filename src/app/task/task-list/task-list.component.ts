import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskInterface } from '../task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.allTasksList;
  }

  onDelete(task: TaskInterface): void {
    console.log(task.id);
    
    this.taskService.deleteTask(task.id);
  }

  onSave(newTask:TaskInterface): void {
    this.taskService.updateTask(newTask);
  }
}