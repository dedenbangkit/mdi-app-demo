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
  IonList,
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";
import "./Inbox.css";
import { inboxData, inboxTypes } from "../data";

const InboxList = () => {
  const read = inboxData.filter((x) => x.read);
  const unread = inboxData.filter((x) => !x.read);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItemDivider color="primary">
          <IonLabel>Unread Message</IonLabel>
        </IonItemDivider>
        <IonItemGroup>
          <IonList>
            {unread.map((x) => (
              <IonItem
                key={x.id}
                className="unread"
                routerLink={`/page/Inbox/${x.id}`}
                routerDirection={"forward"}
              >
                <IonAvatar slot="start">
                  <img src={x.avatar} alt="avatar" />
                </IonAvatar>
                <IonLabel>
                  <h2>{x.sender}</h2>
                  <p>{x.org}</p>
                  <IonBadge color={inboxTypes[x.inboxType].color}>
                    <IonIcon icon={inboxTypes[x.inboxType].icon} />
                    {inboxTypes[x.inboxType].label}
                  </IonBadge>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonItemGroup>
        <IonItemDivider color="light">
          <IonLabel>Read Message</IonLabel>
        </IonItemDivider>
        <IonItemGroup>
          <IonList>
            {read.map((x) => (
              <IonItem
                key={x.id}
                routerLink={`/page/Inbox/${x.id}`}
                routerDirection={"forward"}
              >
                <IonAvatar slot="start">
                  <img src={x.avatar} alt="avatar" />
                </IonAvatar>
                <IonLabel>
                  <h2>{x.sender}</h2>
                  <p>{x.org}</p>
                  <IonBadge color={inboxTypes[x.inboxType].color}>
                    <IonIcon icon={inboxTypes[x.inboxType].icon} />
                    {inboxTypes[x.inboxType].label}
                  </IonBadge>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export const Inbox: React.FC = () => {
  return <InboxList />;
};

export default Inbox;
