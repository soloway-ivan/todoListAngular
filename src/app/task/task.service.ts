import { Injectable } from '@angular/core';
import { constants } from './task.constants';
import { TaskInterface } from './task.interface';
import { TaskStatusInterface } from './taskStatus.interface'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  allTasksList: TaskInterface[] = [];

  updateTask (newTask: TaskInterface): void {
    this.allTasksList.forEach((element, index) => {
      if (element.id === newTask.id) {
        this.allTasksList[index] =  newTask;
      }
    });
  }

  createTask(title: string): TaskInterface {
    const id = this.generateId();
    if (title === '') {
      title = 'Your title';
    }
    return {
      title,
      description: '',
      comment: '',
      status: constants.toDo,
      id: id
    }
  }

  generateId(): string {
    let id = Math.floor(Math.random() * (constants.maxValue - constants.minValue + 1)) + constants.minValue;
    return id.toString();
  }

  addTask(title: string): void {
    this.allTasksList.unshift(this.createTask(title));
  }

  getTask(id:string): TaskInterface {
    let task!: TaskInterface;
    for (task of this.allTasksList) {
      if (task.id === id) {
        return task;
      }
    }
    return task;
  }

  deleteTask(id: string): void {
    this.allTasksList.forEach((element, index) => {
      if (element.id === id) {
        this.allTasksList.splice(index)
      }
    });
  }
}