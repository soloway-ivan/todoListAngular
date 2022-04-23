import { TaskStatusType } from "./taskStatusType";
import { TaskPriorityType } from "./taskPriorityType";

export interface TaskInterface {
  title: string,
  description: string,
  comment: string,
  priority: TaskPriorityType | undefined;
  status: TaskStatusType | undefined,
  id: string
}