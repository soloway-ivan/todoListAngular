import { Injectable, Input } from '@angular/core';
import { TaskInterface } from './task.interface'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor() {
  }

  updateTask = (index: number, newTask: TaskInterface): void => {
    this.allTasksList[index] = newTask;
    console.log(this.allTasksList);
  }

  allTasksList: TaskInterface[] = [];

  createTask(name: string): TaskInterface {
    const id = this.generateId()
    return {
      name,
      description: '',
      comment: '',
      done: false,
      ID: id
    }
  }

  generateId() : number {
    let id;
    for (id = this.allTasksList.length; id++; id < this.allTasksList.length + 1) {}
    return id;
  }

  addTask(name: string) : TaskInterface[] {
    this.allTasksList.unshift(this.createTask(name));
    console.log(this.allTasksList);
    
    return this.allTasksList;
  }
}