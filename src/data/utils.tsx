import moment from "moment";
const shorten = (data: string, num?: number) => {
  const result = data
    .split(" ")
    .slice(0, num ? num : 3)
    .join(" ");
  return result + "...";
};

const format = (date: string, format?: string) => {
  return moment(date, format ? format : "YYYY-MM-DD").format("ll");
};

const up = (date: string, format?: string) => {
  return moment(date, format ? format : "YYYY-MM-DD")
    .add(1, "y")
    .format("ll");
};

export const textUtil = {
  shorten: shorten,
};

export const dateUtil = {
  format: format,
  up: up,
};
