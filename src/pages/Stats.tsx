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
} from "@ionic/react";
import { Doughnut, Line } from "react-chartjs-2";
import "./Stats.css";

const doughnutData = {
  labels: ["Target", "Submitted"],
  datasets: [
    {
      label: "Submission",
      data: [50, 16],
      backgroundColor: ["#405da8", "#29b199"],
      borderWidth: 0,
    },
  ],
};

const lineData = {
  type: "line",
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "ID: 76832x",
      data: [400, 300, 200, 500, 600],
      borderColor: "#404da8",
      backgroundColor: "#404da8",
    },
    {
      label: "ID: 92834c",
      data: [200, 300, 0, 100, 50],
      borderColor: "#29b199",
      backgroundColor: "#29b199",
    },
  ],
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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Submission</IonCardTitle>
            <IonCardSubtitle>Target vs Submitted</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <Doughnut data={doughnutData} type="DOESNOTMATTER" />
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Finance</IonCardTitle>
            <IonCardSubtitle>Projects Income</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <Line data={lineData} type="DOESNOTMATTER" />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Stats;
