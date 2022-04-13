import { Injectable } from '@angular/core';
import { TaskInterface } from './task.interface'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  allTasksList: TaskInterface[] = [];

  updateTask = (newTask: TaskInterface): void => {
    const task = this.findTaskById(newTask);
    this.allTasksList[task] = newTask;
  }

  findTaskById(newTask:TaskInterface) : number {
    let task;
    for (task in this.allTasksList) {
      if (this.allTasksList[task].ID === newTask.ID) {
        break;
      }
    }
    return Number(task);
  }

  createTask(name: string): TaskInterface {
    const id = this.generateId();
    if (name === '') {
      name = 'Your title'
    }
    return {
      name,
      description: '',
      comment: '',
      done: false,
      ID: id
    }
  }

  addTask(name: string) : TaskInterface[] {
    this.allTasksList.unshift(this.createTask(name));
    return this.allTasksList;
  }

  generateId(): number {
    let id;
    for (id = this.allTasksList.length; id <= this.allTasksList.length; id++) { }
    return id;
  }
}