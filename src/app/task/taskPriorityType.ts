export enum PriorityEnum {
  Urgent = 'invert(9%) sepia(87%) saturate(7293%) hue-rotate(360deg) brightness(93%) contrast(126%)',
  Heigh = 'invert(49%) sepia(84%) saturate(1728%) hue-rotate(358deg) brightness(100%) contrast(108%)',
  Medium = 'invert(49%) sepia(72%) saturate(1226%) hue-rotate(68deg) brightness(97%) contrast(99%)',
  Low = 'invert(75%) sepia(91%) saturate(729%) hue-rotate(138deg) brightness(104%) contrast(104%)',
}

export type TaskPriorityType = PriorityEnum | string;