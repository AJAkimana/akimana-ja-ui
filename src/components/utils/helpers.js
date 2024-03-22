import moment from "moment";

export const toDate = (date = null, format = "YYYY") => {
  if (date) return moment(date).format(format);
  return "Present";
};
