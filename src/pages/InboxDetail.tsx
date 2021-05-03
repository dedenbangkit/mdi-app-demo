import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonChip,
  IonItemDivider,
  IonButton,
} from "@ionic/react";
import { inboxData, inboxTypes, lorem } from "../data";

interface InboxDetailProps {
  id: string;
}

export const InboxDetail: React.FC<InboxDetailProps> = ({ id }) => {
  const data = inboxData.find((x) => x.id.toString() === id);
  return (
    <IonContent>
      <IonItem>
        <IonLabel>
          <h2>
            From:
            <IonChip>
              <IonAvatar slot="start">
                <img src={data?.avatar || ""} alt="avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{data?.sender || ""}</h2>
              </IonLabel>
            </IonChip>
          </h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          <h2>
            Subject: {data?.inboxType ? inboxTypes[data.inboxType].label : ""}
          </h2>
        </IonLabel>
      </IonItem>
      <IonItem>
        <p>{lorem.paragraphs()}</p>
      </IonItem>
      {data?.inboxType === "projectInvitation" && (
        <IonButton expand="full">Quick Apply</IonButton>
      )}
      {data?.inboxType === "projectAssignment" && (
        <IonButton expand="full" disabled>
          Start Survey
        </IonButton>
      )}
    </IonContent>
  );
};

export default InboxDetail;
