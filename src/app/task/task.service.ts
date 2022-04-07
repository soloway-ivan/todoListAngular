import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  allTasks: object[] = [];

  updateTaskData(name: string) {      
    return this.allTasks.unshift({
      name,
      descriptions: '',
      comment: '',
      done: false
    });
  }
}