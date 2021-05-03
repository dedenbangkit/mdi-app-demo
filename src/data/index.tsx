import * as faker from "faker";
import moment from "moment";
import { surveyList } from "./static";
import { star, cash, documentText } from "ionicons/icons";

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
const datatype = faker.datatype;
const commerce = faker.commerce;
const address = faker.address;
const lorem = faker.lorem;
const company = faker.company;
const finance = faker.finance;
const pic = faker.image;

const projectsData = {
  projects: [
    {
      id: 1,
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
      id: 2,
      name: "Supporting Agricultural Productivity in Mali",
      assigned: "15-03-2021",
      due: "13-07-2021",
      location: "Mali",
      target: 30,
      completed: 8,
      value: 500000,
    },
    {
      id: 3,
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
      id: 4,
      name: "Incubating Inclusive Agribusiness",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      id: 5,
      name: "Access to Safe Water and Sanitation",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      id: 6,
      name: "Wash in Schools",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
    {
      id: 7,
      name: "Wash in Schools",
      assigned: "08-12-2020",
      due: "15-01-2021",
      location: "Mali",
      value: 500000,
    },
  ],
};

const inboxData = [
  {
    id: 1,
    sender: "Peter van der Linde",
    org: "Akvo",
    avatar: "https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg",
    inboxType: "projectInvitation",
    read: false,
  },
  {
    id: 2,
    sender: "Abdoulaye Semdé",
    org: "Akvo",
    avatar:
      "https://akvo.org/wp-content/uploads/2015/07/Abdoulaye-Semde-240x135.jpg",
    inboxType: "projectInvitation",
    read: false,
  },
  {
    id: 3,
    sender: "Peter van der Linde",
    org: "Akvo",
    avatar: "https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg",
    inboxType: "financeUpdate",
    read: true,
  },
  {
    id: 4,
    sender: "Peter van der Linde",
    org: "Akvo",
    avatar: "https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg",
    inboxType: "projectAssignment",
    read: true,
  },
];

const inboxTypes = {
  projectInvitation: {
    icon: star,
    label: "Project Invitation",
    color: "primary",
  },
  financeUpdate: { icon: cash, label: "Finance Update", color: "success" },
  projectAssignment: {
    icon: documentText,
    label: "Project Assignment",
    color: "danger",
  },
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
  datatype,
  surveyList,
  projectsData,
  inboxData,
  inboxTypes,
};

export default newArray;
