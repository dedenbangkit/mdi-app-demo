import * as faker from "faker";
import moment from "moment";
import { surveyList } from "./static";

const newArray = (num = 40) => {
  return Array.from({ length: num }, () => Math.floor(Math.random() * num));
};
const name = faker.name;
const internet = faker.internet;
const dt = (dateType: string) => {
  switch (dateType) {
    case "past":
      return moment(faker.date.past(0)).format("L");
    default:
      return moment(faker.date.future(1)).format("L");
  }
};
const commerce = faker.commerce;
const address = faker.address;
const lorem = faker.lorem;
const company = faker.company;
const finance = faker.finance;
const pic = faker.image;

const projects = {
  projects: [
    {
      name:
        "Toward Sustainable Clusters in Agribusiness through Learning in Entrepreneurship",
      assigned: "15-04-2021",
      due: "13-05-2021",
      location: "Mali",
      target: 20,
      completed: 12,
      value: 200000,
    },
    {
      name: "Supporting Agricultural Productivity in Mali",
      assigned: "15-03-2021",
      due: "13-07-2021",
      location: "Mali",
      target: 30,
      completed: 8,
      value: 500000,
    },
    {
      name: "Biogas plants – Biodigesters",
      assigned: "15-03-2021",
      due: "13-07-2021",
      location: "Mali",
      target: 200,
      completed: 80,
      value: 200000,
    },
  ],
  history: [
    {
      name: "Incubating Inclusive Agribusiness",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      name: "Access to Safe Water and Sanitation",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      name: "Wash in Schools",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      name: "Wash in Schools",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
  ],
};

export {
  name,
  internet,
  dt,
  commerce,
  address,
  lorem,
  company,
  finance,
  pic,
  surveyList,
  projects,
};

export default newArray;
