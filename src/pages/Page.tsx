import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import Home from "./Home";
import Setting from "./Setting";
import Inbox from "./Inbox";
import Stats from "./Stats";

const Pages: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  switch (name) {
    case "Home":
      return <Home />;
    case "Settings":
      return <Setting />;
    case "Inbox":
      return <Inbox />;
    case "Stats":
      return <Stats />;
    default:
      return <ExploreContainer name={name} />;
  }
};

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Pages />
      </IonContent>
    </IonPage>
  );
};

export default Page;
