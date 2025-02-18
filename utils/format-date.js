"use strict";

export default function formatDate(date) {
  const [_, month, day, __, time] = date.toString().split(" ");
  let [hour, minutes, ___] = time.split(":");

  let meridiem = Number(hour) >= 12 && Number(hour) <= 23 ? "pm" : "am";

  if (meridiem === "pm" && Number(hour) !== 12) {
    hour = Number(hour) - 12;
  }
  if (hour === "00") {
    hour = "12";
  }

  return `${hour}:${minutes} ${meridiem} · ${day} ${month}`;
}
