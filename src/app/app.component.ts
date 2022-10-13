import { Component } from '@angular/core';
import { TaskInterface } from './task/task.interface';
import { TaskService } from './task/task.service';
import { StatusEnum } from './task/taskStatusType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private taskService : TaskService) {}
  public statusEnum = StatusEnum;
  title = 'todoListAngular';  
  filter: any = 'All';

  get tasks(): TaskInterface[] {
    return this.taskService.filterBy(this.filter);
  }

  onFilterBy(value: any): void {
    this.filter = value;
  }
}
