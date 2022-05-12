import { TaskPriorityColorEnum } from '../task/taskPriorityType';
import { TaskPriorityTitleEnum } from '../task/taskPriorityType';

export interface TaskPriorityInterface {
  title: TaskPriorityTitleEnum,
  color: TaskPriorityColorEnum
}