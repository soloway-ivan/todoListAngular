import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
