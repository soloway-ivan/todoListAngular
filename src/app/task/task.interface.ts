import { TaskStatusType } from "./taskStatusType";

export interface TaskInterface {
  title: string,
  description: string,
  comment?: string,
  status: TaskStatusType | undefined,
  id: string
}