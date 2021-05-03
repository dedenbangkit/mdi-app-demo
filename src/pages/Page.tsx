import {
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
import Setting from "./Setting";
import Inbox from "./Inbox";
import InboxDetail from "./InboxDetail";
import DataPoints from "./DataPoints";
import Stats from "./Stats";

const Pages: React.FC = () => {
  const params = useParams<{ name: string; id: string }>();
  switch (params.name) {
    case "Home":
      return <Home />;
    case "Settings":
      return <Setting />;
    case "Inbox":
      if (params.id) {
        return <InboxDetail id={params.id} />;
      }
      return <Inbox />;
    case "Stats":
      return <Stats />;
    case "DataPoints":
      return <DataPoints />;
    default:
      return <div>Page Not Found</div>;
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
            <IonTitle>{name || "Back"}</IonTitle>
          </IonButtons>
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
