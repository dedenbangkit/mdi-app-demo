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

export const Account: React.FC = () => {
  const [accountType, setAccountType] = useState("orange");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
        <IonItemDivider color="light">
          <IonLabel>Finance</IonLabel>
        </IonItemDivider>
        <IonItemGroup>
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
            <IonInput
              placeholder="Address Line 1"
              value="Rue 17 -Porte 305, Badalabougou Est BP 2220"
            ></IonInput>
            <IonLabel position="stacked">City</IonLabel>
            <IonInput placeholder="City" value="Bamako"></IonInput>
            <IonLabel position="stacked">State</IonLabel>
            <IonInput
              placeholder="State"
              value="Bamako Capital District"
            ></IonInput>
            <IonLabel position="stacked">Zip Code</IonLabel>
            <IonInput
              type="number"
              placeholder="Zip Code"
              value={91095}
            ></IonInput>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Account;
