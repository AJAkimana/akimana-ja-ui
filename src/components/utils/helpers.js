import moment from "moment";

export const toDate = (
  date = null,
  format = "YYYY",
  displayPresent = false
) => {
  if (!date && displayPresent) return "Present";
  return moment(date ?? undefined).format(format);
};

export const toDuration = (
  start,
  end,
  format = "YYYY",
  displayPresent = false
) => {
  const startDate = moment(start).format(format);
  if (!end && displayPresent) return `${startDate} - Present`;

  const endDate = moment(end || undefined).format(format);
  return `${startDate} - ${endDate}`;
};
