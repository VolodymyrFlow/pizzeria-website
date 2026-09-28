export default function getPragueHour(date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Prague",
    hour: "2-digit",
    hourCycle: "h23",
  });

  const hourText = formatter.format(date);

  return Number(hourText);
}
