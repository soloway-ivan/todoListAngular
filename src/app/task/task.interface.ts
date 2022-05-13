import { TaskStatusType } from "./taskStatusType";

export interface TaskInterface {
  title: string,
  description: string,
  comment: string,
  priority: string | undefined;
  status: TaskStatusType | undefined,
  id: string
}