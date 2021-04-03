export function meetup(year, month, descriptor, weekdayName) {
  const date = new Date(year, month - 1);
  const weekday = weekdays.indexOf(weekdayName);

  switch (descriptor) {
    case "teenth":
      date.setDate(13);
      break;

    case "first":
      date.setDate(1);
      break;

    case "second":
      date.setDate(8);
      break;

    case "third":
      date.setDate(15);
      break;

    case "fourth":
      date.setDate(22);
      break;

    case "fifth":
      date.setDate(29);
      break;

    case "last":
      const daysInMonth = new Date(year, month, 0).getDate();
      date.setDate(daysInMonth - 6);

      break;
  }

  while (date.getDay() !== weekday) {
    date.setDate(date.getDate() + 1);
  }

  return date;
}

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
