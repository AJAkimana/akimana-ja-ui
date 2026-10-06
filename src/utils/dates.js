// Dates are stored as "YYYY-MM-DD", which parse as UTC midnight.
const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatMonth = (date) => monthYear.format(new Date(date));

export const formatPeriod = (start, end) =>
  `${formatMonth(start)} - ${end ? formatMonth(end) : "Present"}`;

export const yearsSince = (year) => new Date().getFullYear() - year;
