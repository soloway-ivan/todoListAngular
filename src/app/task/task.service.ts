import { Injectable } from '@angular/core';
import { constants } from './task.constants';
import { TaskInterface } from './task.interface';
import { StatusEnum } from './taskStatusType'

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

    this.getTask(newTask.id.toString())
  }

  createTask(title: string): TaskInterface {
    const id = this.generateId();
    if (title === '') {
      title = 'Your title';
    }
    return {
      title,
      description: 'Your description...',
      comment: '',
      status: StatusEnum.toDo,
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
    return this.allTasksList.find(task => task.id === id)!;
  }

  deleteTask(id: string): void {
    const task = this.getTask(id);
    if (!task) return;
    this.allTasksList = this.allTasksList.splice(this.allTasksList.indexOf(task));
  }
}