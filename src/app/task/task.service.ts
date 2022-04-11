import { Injectable, Input } from '@angular/core';
import { TaskInterface } from './task.interface'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  updateTask

  constructor() {
    this.updateTask = (index: number, newTask: TaskInterface): void => {
      this.allTasksList[index] = newTask;
    }
  }


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


}