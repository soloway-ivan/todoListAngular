export const constants = {
  minValue : 10000,
  maxValue : 99999,
}

export const TaskPriorityTitle = {
  Urgent : "Urgent",
  Height : "Height",
  Medium : "Medium",
  Low : "Low",
};

export const TaskPriorityColor = {
  Urgent : "invert(9%) sepia(87%) saturate(7293%) hue-rotate(360deg) brightness(93%) contrast(126%)",
  Height : "invert(49%) sepia(84%) saturate(1728%) hue-rotate(358deg) brightness(100%) contrast(108%)",
  Medium : "invert(49%) sepia(72%) saturate(1226%) hue-rotate(68deg) brightness(97%) contrast(99%)",
  Low : "invert(75%) sepia(91%) saturate(729%) hue-rotate(138deg) brightness(104%) contrast(104%)",
};

export const TaskPriorityData = [
  {
    title: TaskPriorityTitle.Urgent,
    color: TaskPriorityColor.Urgent
  },
  {
    title: TaskPriorityTitle.Height,
    color: TaskPriorityColor.Height
  },
  {
    title: TaskPriorityTitle.Medium,
    color: TaskPriorityColor.Medium
  },
  {
    title: TaskPriorityTitle.Low,
    color: TaskPriorityColor.Low
  }
];