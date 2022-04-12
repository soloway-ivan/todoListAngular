import { Component } from '@angular/core';
import { TaskService } from '../task.service';

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

  // update

  // updateTask() {
  //   const newTask: TaskInterface = {
  //     name: 'string',
  //     description: 'desc'
  //     // name: this.nameText,
  //     // description: this.descriptionText
  //   }
  //   console.log(this.task);


  //   this.taskService.updateTask(this.taskService.allTasksList.indexOf(this.task), newTask);
  //   this.editable = false;
  //   this.addReadonly();
  // }
}