import React from "react";
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
  IonCardSubtitle,
  IonCardContent,
  IonProgressBar,
  IonLabel,
  IonItem,
  IonBadge,
  useIonActionSheet,
} from "@ionic/react";
import {
  location,
  calendar,
  clipboardOutline,
  barChartOutline,
} from "ionicons/icons";
import { projectsData } from "../data";
import { dateUtil } from "../data/utils";

export const Home: React.FC = () => {
  const [present] = useIonActionSheet();
  const history = useHistory();
  const handleCardClick = (e, x) => {
    present({
      header: "Action",
      buttons: [
        {
          text: "Start Survey",
          icon: clipboardOutline,
          handler: () => {
            console.log("Survey Clicked");
          },
        },
        {
          text: "View Data",
          icon: barChartOutline,
          handler: () => {
            history.push(`/page/DataPoints/${x.id}`);
          },
        },
      ],
    });
    return;
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {projectsData.projects.map((x, i) => (
          <IonCard key={x.id} onClick={(e) => handleCardClick(e, x)}>
            <IonCardContent>
              <IonCardSubtitle>{x.name}</IonCardSubtitle>
              <IonChip color="dark">
                <IonIcon icon={location} />
                <IonLabel>{x.location}</IonLabel>
              </IonChip>
              <IonChip color="dark">
                <IonIcon icon={calendar} size="normal" />
                <IonLabel>{dateUtil.format(x.due, "DD-MM-YYYY")}</IonLabel>
              </IonChip>
            </IonCardContent>
            <IonItem>
              <IonLabel>Progress</IonLabel>
              <IonBadge color="danger">
                {x.completed} / {x.target}
              </IonBadge>
            </IonItem>
            <IonProgressBar color="danger" value={x.completed / x.target} />
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
