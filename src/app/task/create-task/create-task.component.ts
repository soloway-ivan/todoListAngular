import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../task.service'

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

  constructor(private taskService: TaskService) {}

  @ViewChild('newItemName')
  newItemName: ElementRef | undefined;

  onAddTask(name: string) {
    this.taskService.updateAllTasksList(name);
    if (!this.newItemName) {
      return;
    }
    this.newItemName.nativeElement.value='';
  }
}