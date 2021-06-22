import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Redirect } from "react-router-dom";
import "./Login.css";

const logo = require("../image/logo-mdi.png");

const Login: React.FC = () => {
  const [email, setEmail] = useState("test@akvo.org");
  const [password, setPassword] = useState("testing");
  const [redirect, setRedirect] = useState(false);
  const handleLogin = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/page/Home" />;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRow className="login">
          <div className="container-logo">
            <img src={logo.default} alt="mdi-logo" className="img-logo" />
          </div>
          <IonCol>
            <IonItem>
              <IonLabel position="floating"> Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating"> Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>
            <p>
              Don't have an account? <b>Sign up!</b>
            </p>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
