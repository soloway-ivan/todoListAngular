import { Component, Input, SimpleChanges } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./styles/task-list-item.scss']
})

export class TaskListItemComponent {
  @Input() task!: Task;

  ngOnChanges(OnChanges: SimpleChanges) {
    console.log(OnChanges['task'], 'changed');
  }
  // edit WIP
}
