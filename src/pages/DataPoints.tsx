import { useParams } from "react-router";
import {
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
  IonProgressBar,
} from "@ionic/react";
import { location, calendar } from "ionicons/icons";
import "./Inbox.css";
import newArray, { datatype, name, address, projectsData, dt } from "../data";

export const DataPoints: React.FC = () => {
  const params = useParams<{ name: string; id: string }>();
  const current = projectsData.projects.find(
    (x) => x.id.toString() === params.id
  );
  const data = newArray(current?.completed || 0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{current?.name}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonChip color="dark">
              <IonIcon icon={location} />
              <IonLabel>{current?.location}</IonLabel>
            </IonChip>
            <IonChip color="dark">
              <IonIcon icon={calendar} />
              <IonLabel>{current?.due}</IonLabel>
            </IonChip>
          </IonCardContent>
          <IonItem>
            <IonLabel>Progress</IonLabel>
            <IonBadge color="danger">
              {current?.completed} / {current?.target}
            </IonBadge>
          </IonItem>
          <IonProgressBar
            color="danger"
            value={
              current?.completed && current?.target
                ? current?.completed / current?.target
                : 0
            }
          />
        </IonCard>
        <IonItemGroup>
          <IonItemDivider color="primary">
            <IonLabel>Submissions</IonLabel>
          </IonItemDivider>
          {data.map((x, i) => (
            <IonItem key={i}>
              <IonLabel>
                <h2>
                  {datatype
                    .uuid()
                    .split("-")
                    .filter((x, i) => i > 0 && i < 4)
                    .join("-")}
                </h2>
                <p>
                  <b>{dt("past")}</b> {name.jobTitle()} - {name.findName()}
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default DataPoints;
