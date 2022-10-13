import { Component, EventEmitter, Output } from '@angular/core';
import { StatusEnum } from '../taskStatusType';

@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})

export class TaskFilterComponent {
  constructor() {}
  public statusEnum = StatusEnum;
  public filters = Object.values(this.statusEnum)
  
  @Output() 
  filterByEvent = new EventEmitter<StatusEnum | 'All'>();

  onFilterBy(value: StatusEnum | 'All') {
    this.filterByEvent.emit(value);
  }
}
