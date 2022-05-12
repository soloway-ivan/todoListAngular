import { TaskStatusType } from "./taskStatusType";
import { TaskPriorityTitleEnum } from "./taskPriorityType";

export interface TaskInterface {
  title: string,
  description: string,
  comment: string,
  priority: TaskPriorityTitleEnum | undefined;
  status: TaskStatusType | undefined,
  id: string
}