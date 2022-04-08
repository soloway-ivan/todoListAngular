import { Component, Input, SimpleChanges } from '@angular/core';
import { TaskInterface } from '../task.interface';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent {

  @Input()
  task!: TaskInterface;

  ngOnChanges(OnChanges: SimpleChanges) { //WIP
    console.log(OnChanges['task'], 'changed');
  }
  // edit WIP
}
