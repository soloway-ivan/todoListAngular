import { TaskPriorityInterface } from "./taskPriority.interface";

export enum TaskPriorityTitleEnum {
  Urgent = "Urgent",
  Height = "Height",
  Medium = "Medium",
  Low = "Low",
};

export enum TaskPriorityColorEnum {
  Urgent = "invert(9%) sepia(87%) saturate(7293%) hue-rotate(360deg) brightness(93%) contrast(126%)",
  Height = "invert(49%) sepia(84%) saturate(1728%) hue-rotate(358deg) brightness(100%) contrast(108%)",
  Medium = "invert(49%) sepia(72%) saturate(1226%) hue-rotate(68deg) brightness(97%) contrast(99%)",
  Low = "invert(75%) sepia(91%) saturate(729%) hue-rotate(138deg) brightness(104%) contrast(104%)",
}

export type TaskPriorityTitleType = keyof typeof TaskPriorityTitleEnum;

export const TaskPriorityData: Record<TaskPriorityTitleEnum, TaskPriorityInterface> = {
  [TaskPriorityTitleEnum.Urgent]: {
    title: TaskPriorityTitleEnum.Urgent,
    color: TaskPriorityColorEnum.Urgent
  },
  [TaskPriorityTitleEnum.Height]: {
    title: TaskPriorityTitleEnum.Height,
    color: TaskPriorityColorEnum.Height
  },
  [TaskPriorityTitleEnum.Medium]: {
    title: TaskPriorityTitleEnum.Medium,
    color: TaskPriorityColorEnum.Medium
  },
  [TaskPriorityTitleEnum.Low]: {
    title: TaskPriorityTitleEnum.Low,
    color: TaskPriorityColorEnum.Low
  }
}