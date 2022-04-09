import { Injectable } from '@angular/core';
import { TaskInterface } from './task.interface'

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  allTasksList: TaskInterface[] = [];

  createTask(name: string): TaskInterface {
    return {
      name,
      description: '',
      comment: '',
      done: false
    }
  }

  addTask(name: string) : TaskInterface[] {
    this.allTasksList.unshift(this.createTask(name));
    return this.allTasksList;
  }

  deleteTask(task: TaskInterface) {
    this.allTasksList.splice(this.allTasksList.indexOf(task), 1);
  }
}