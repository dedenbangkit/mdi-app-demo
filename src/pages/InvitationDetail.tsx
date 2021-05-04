import React from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonBadge,
  IonButton,
  IonFooter,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonCardHeader,
} from "@ionic/react";
import { closeCircle, calendar, cash } from "ionicons/icons";
import { dateUtil } from "../data/utils";

interface InvitationDetailProps {
  data: any;
  close: any;
}

export const InvitationDetail: React.FC<InvitationDetailProps> = ({
  data,
  close,
}) => {
  return (
    <IonPage>
      <IonHeader style={{ backgroundColor: "#fff" }}>
        <IonToolbar>
          <IonTitle>Invitation</IonTitle>
          <IonIcon
            onClick={(e) => close()}
            icon={closeCircle}
            size="large"
            slot="end"
            style={{ marginRight: "1rem" }}
          />
        </IonToolbar>
        <IonCardHeader>
          <b>{data.name}</b>
        </IonCardHeader>
        <IonItem>
          <p>
            Posted by :{" "}
            {data.org.map((x) => `${x.name} (${x.short})`).join(", ")}
          </p>
        </IonItem>
        <IonItem>
          <IonLabel>
            <IonBadge color="danger">
              <IonIcon icon={calendar} />
              {dateUtil.up(data?.startDate)} - {dateUtil.up(data?.endDate)}
            </IonBadge>
          </IonLabel>
          <IonLabel>
            <IonBadge color="success" style={{ float: "right" }}>
              <IonIcon icon={cash} />
              MLF {Math.floor(data?.funds / 1000)}
            </IonBadge>
          </IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <p style={{ textAlign: "justify" }}>{data.desc}</p>
        </IonItem>
      </IonContent>
      <IonFooter style={{ backgroundColor: "#fff" }}>
        <IonButton expand="full">Quick Apply</IonButton>
        <IonButton expand="full" color="medium" onClick={(e) => close()}>
          I'm not interested
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default InvitationDetail;
