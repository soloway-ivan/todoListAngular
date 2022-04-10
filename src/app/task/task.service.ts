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

  updateTask(id: number, newTask: TaskInterface) {
    this.allTasksList[id].name = newTask.name;
    this.allTasksList[id].description = newTask.description;
  }

  getCurrentTask(task: TaskInterface): TaskInterface {
    return this.allTasksList[this.allTasksList.indexOf(task)];
  }
}