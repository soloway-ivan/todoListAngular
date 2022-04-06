import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor(private taskService: TaskService) {}

  taskList = this.taskService.allTasks;

  get tasks() {
    return this.taskList;
  }
}