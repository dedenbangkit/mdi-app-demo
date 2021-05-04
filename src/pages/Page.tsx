import {
  IonRow,
  IonCol,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import Home from "./Home";
import Account from "./Account";
import Inbox from "./Inbox";
import InboxDetail from "./InboxDetail";
import DataPoints from "./DataPoints";
import Stats from "./Stats";
import Survey from "./Survey";

const NotFound: React.FC = () => {
  return (
    <IonContent fullscreen>
      <IonRow>
        <IonCol style={{ textAlign: "center" }}>
          <h1>Under Development</h1>
        </IonCol>
      </IonRow>
    </IonContent>
  );
};

const Pages: React.FC = () => {
  const params = useParams<{ name: string; id: string }>();
  switch (params.name) {
    case "Home":
      return <Home />;
    case "Account":
      return <Account />;
    case "Inbox":
      if (params.id) {
        return <InboxDetail id={params.id} />;
      }
      return <Inbox />;
    case "Stats":
      return <Stats />;
    case "Survey":
      return <Survey />;
    case "DataPoints":
      if (params.id) {
        return <DataPoints />;
      }
      return <NotFound />;
    default:
      return <NotFound />;
  }
};

const Page: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {id ? <IonBackButton defaultHref="" /> : <IonMenuButton />}
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
