import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";
import "./Inbox.css";
import { star, cash, documentText } from "ionicons/icons";

export const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemGroup>
          <IonItemDivider color="primary">
            <IonLabel>Unread Message</IonLabel>
          </IonItemDivider>
          <IonItem className="unread">
            <IonAvatar slot="start">
              <img
                src="https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg"
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Peter van der Linde</h2>
              <p>Akvo</p>
              <IonBadge color="primary">
                <IonIcon icon={star} />
                Project Invitation
              </IonBadge>
            </IonLabel>
          </IonItem>
          <IonItem className="unread">
            <IonAvatar slot="start">
              <img
                src="https://akvo.org/wp-content/uploads/2015/07/Abdoulaye-Semde-240x135.jpg"
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Abdoulaye Semdé</h2>
              <p>Akvo</p>
              <IonBadge color="primary">
                <IonIcon icon={star} />
                Project Invitation
              </IonBadge>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider color="dark">
            <IonLabel>All Message</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg"
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Peter van der Linde</h2>
              <p>Akvo</p>
              <IonBadge color="danger">
                <IonIcon icon={documentText} />
                Project Assignment
              </IonBadge>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://akvo.org/wp-content/uploads/2013/10/pvdl_240.jpg"
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Peter van der Linde</h2>
              <p>Akvo</p>
              <IonBadge color="success">
                <IonIcon icon={cash} />
                Finance Update
              </IonBadge>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
