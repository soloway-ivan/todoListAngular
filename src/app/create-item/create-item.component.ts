import { Component } from '@angular/core';
import { TaskService } from '../task.service'

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})

export class CreateItemComponent {

  constructor(private taskService: TaskService) {}

  setTaskName(name: string) {
    this.taskService.updateTaskData(name);
  }
}