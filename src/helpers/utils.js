import moment from "moment";

export const toProgess = (startYear) => {
  const years = moment().diff(`${startYear}-01-01`, "years", true);
  let progress = 92 * 3.5;
  if (years <= 9.2) {
    progress = years * 35;
  }
  return progress;
};
