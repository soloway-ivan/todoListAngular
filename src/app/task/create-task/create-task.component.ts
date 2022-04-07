import { Component } from '@angular/core';
import { TaskService } from '../task.service'

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

  constructor(private taskService: TaskService) { }

  setTaskName(name: string) {
    this.taskService.updateTaskData(name);
  }
}