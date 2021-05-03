import React, { useState } from "react";
import {
  IonContent,
  IonIcon,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonChip,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonProgressBar,
  IonLabel,
  IonItem,
  IonBadge,
  useIonActionSheet,
} from "@ionic/react";
import {
  location,
  fileTrayFull,
  briefcaseOutline,
  calendar,
  cash,
  clipboardOutline,
  barChartOutline,
} from "ionicons/icons";
import { projects } from "../data";

const headerInfo = [
  {
    value: "projects",
    label: "Projects",
    color: "secondary",
    icon: briefcaseOutline,
  },
  {
    value: "history",
    label: "History",
    color: "success",
    icon: fileTrayFull,
  },
];

const Contents = ({ segment }): any => {
  const [present] = useIonActionSheet();
  const handleCardClick = () => {
    if (segment === "projects") {
      present({
        buttons: [
          { text: "Start Survey", icon: clipboardOutline },
          { text: "View Data", icon: barChartOutline },
        ],
      });
    }
    return;
  };
  return projects[segment].map((x, i) => (
    <IonCard key={i} onClick={handleCardClick}>
      <IonCardHeader>
        <IonCardSubtitle>{x.name}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonChip color="dark">
          <IonIcon icon={location} />
          <IonLabel>{x.location}</IonLabel>
        </IonChip>
        <IonChip color="dark">
          <IonIcon icon={calendar} />
          <IonLabel>{x.due}</IonLabel>
        </IonChip>
        {segment === "history" && (
          <IonChip color="dark">
            <IonIcon icon={cash} />
            <IonLabel>{x.value}</IonLabel>
          </IonChip>
        )}
      </IonCardContent>
      {segment === "projects" && (
        <>
          <IonItem>
            <IonLabel>Progress</IonLabel>
            <IonBadge color="danger">
              {x.completed} / {x.target}
            </IonBadge>
          </IonItem>
          <IonProgressBar color="danger" value={x.completed / x.target} />
        </>
      )}
    </IonCard>
  ));
};

export const Home: React.FC = () => {
  const [segment, setSegment] = useState("projects");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <IonSegment
          onIonChange={(e: any) => setSegment(e.detail.value)}
          value={segment}
        >
          {headerInfo.map((x) => (
            <IonSegmentButton key={x.value} value={x.value} layout="icon-start">
              <IonIcon icon={x.icon} />
              <IonLabel>{x.label} </IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonHeader>
      <IonContent>
        <Contents segment={segment} />
      </IonContent>
    </IonPage>
  );
};

export default Home;