import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonSelect,
  IonSelectOption,
  IonAvatar,
  IonLabel,
  IonInput,
} from "@ionic/react";

export const Setting: React.FC = () => {
  const [accountType, setAccountType] = useState("orange");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemGroup>
          <IonItem>
            <IonAvatar slot="start">
              <img
                src="https://akvo.org/wp-content/uploads/2016/03/Banzoumana.240px-3.jpg"
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel>
              <h2>Banzoumana Coulibaly</h2>
              <h3>test@akvo.org</h3>
              <p>Akvo</p>
            </IonLabel>
          </IonItem>
        </IonItemGroup>
        <IonItemGroup>
          <IonItemDivider color="dark">
            <IonLabel>Finance</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">Account Type</IonLabel>
            <IonSelect
              value={accountType}
              placeholder="Select One"
              onIonChange={(e) => setAccountType(e.detail.value)}
              interface="action-sheet"
            >
              <IonSelectOption value="orange">Orange Money</IonSelectOption>
              <IonSelectOption value="bank">Bank Account</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Account Number</IonLabel>
            <IonInput value={235432546} type="number"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Address</IonLabel>
            <IonInput placeholder="Address Line 1"></IonInput>
            <IonInput placeholder="Address Line 2"></IonInput>
            <IonInput placeholder="City"></IonInput>
            <IonInput placeholder="State"></IonInput>
            <IonInput placeholder="Zip Code"></IonInput>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
