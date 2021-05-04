import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonChip,
  IonBadge,
  IonItem,
} from "@ionic/react";
import { Bar } from "react-chartjs-2";
import "./Stats.css";
import { projectsData } from "../data";
import { textUtil, dateUtil } from "../data/utils";

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: textUtil.shorten(projectsData.projects[0].name),
      data: [400, 300, 200, 500, 600],
      backgroundColor: "#3880ff",
      stack: "Finance",
      pointStyle: "circle",
      pointRadius: 2,
    },
    {
      label: textUtil.shorten(projectsData.projects[1].name),
      data: [200, 300, 0, 100, 50],
      backgroundColor: "#2dd36f",
      stack: "Finance",
      pointStyle: "circle",
      pointRadius: 2,
    },
    {
      label: textUtil.shorten(projectsData.projects[2].name),
      data: [200, 300, 0, 100, 50],
      backgroundColor: "#eb445a",
      stack: "Finance",
      pointStyle: "circle",
      pointRadius: 2,
    },
  ],
};
const barOptions = {
  scales: {
    y: [
      {
        stacked: true,
      },
    ],
    x: [
      {
        stacked: true,
      },
    ],
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
  },
};

const summary = [
  {
    title: "Current Projects",
    value: "3",
    data: [
      {
        name: "Submitted",
        value: "36 Datapoints",
        color: "secondary",
      },
      {
        name: "Targeted",
        value: "80 Datapoints",
        color: "success",
      },
      {
        name: "Last Submission",
        value: dateUtil.format("2021-05-01"),
        color: "danger",
      },
    ],
  },
  {
    title: "Completed Projects",
    value: "5",
    data: [
      {
        name: "Submitted",
        value: "118 Datapoints",
        color: "success",
      },
      {
        name: "Targeted",
        value: "120 Datapoints",
        color: "danger",
      },
      {
        name: "Earned",
        value: "4000",
        color: "success",
      },
    ],
  },
];

const SummaryList = ({ data }) => {
  return data.map((x, i) => (
    <IonItem key={i}>
      <IonCardSubtitle>{x.name}</IonCardSubtitle>
      <IonBadge slot="end" color={x.color}>
        {x.value}
      </IonBadge>
    </IonItem>
  ));
};
export const Stats: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow>
          {summary.map((x, i) => (
            <IonCol key={i}>
              <IonCard>
                <IonItem>
                  <IonCardTitle>{x.title}</IonCardTitle>
                  <IonChip slot="start" outline={true} color="primary">
                    <b>{x.value}</b>
                  </IonChip>
                </IonItem>
                <SummaryList data={x.data} />
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Finance</IonCardTitle>
                <IonCardSubtitle>Projects Income</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <Bar
                  data={barData}
                  options={barOptions}
                  type="DOESNOTMATTER"
                  height={300}
                />
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Stats;
