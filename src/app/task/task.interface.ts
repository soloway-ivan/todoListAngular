import { TaskStatusType } from "./taskStatusType";

export interface TaskInterface {
  title: string,
  description: string,
  comment?: string,
  status: TaskStatusType,
  id: string
}