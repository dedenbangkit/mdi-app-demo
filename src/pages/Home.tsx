import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  briefcase,
  calendar,
  cash,
  clipboardOutline,
  barChartOutline,
} from "ionicons/icons";
import { projectsData } from "../data";
import { dateUtil } from "../data/utils";

const headerInfo = [
  {
    value: "projects",
    label: "Projects",
    color: "secondary",
    icon: briefcase,
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
  const history = useHistory();
  const handleCardClick = (e, x) => {
    if (segment === "projects") {
      present({
        header: "Action",
        buttons: [
          {
            text: "View Data",
            icon: barChartOutline,
            handler: () => {
              history.push(`/page/DataPoints/${x.id}`);
            },
          },
          {
            text: "Start Survey",
            icon: clipboardOutline,
            handler: () => {
              console.log("Survey Clicked");
            },
          },
        ],
      });
    }
    return;
  };
  return projectsData[segment].map((x, i) => (
    <IonCard key={x.id} onClick={(e) => handleCardClick(e, x)}>
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
          <IonLabel>{dateUtil.format(x.due, "DD-MM-YYYY")}</IonLabel>
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
      <IonContent fullscreen>
        <Contents segment={segment} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
