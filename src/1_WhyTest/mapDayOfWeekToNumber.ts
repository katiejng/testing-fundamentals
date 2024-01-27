// Code with bugs
export const mapDayOfWeekToNumber = (dayOfWeek: string) => {
  switch (dayOfWeek) {
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    case "SUnday":
      return 7;
  }
};
