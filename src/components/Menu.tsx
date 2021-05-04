import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonBadge,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  statsChartOutline,
  statsChartSharp,
  homeOutline,
  homeSharp,
  mailUnreadOutline,
  mailUnreadSharp,
  personCircleOutline,
  personCircleSharp,
  clipboardOutline,
  clipboardSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/page/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailUnreadOutline,
    mdIcon: mailUnreadSharp,
  },
  {
    title: "Survey",
    url: "/page/Survey",
    iosIcon: clipboardOutline,
    mdIcon: clipboardSharp,
  },
  {
    title: "Stats",
    url: "/page/Stats",
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp,
  },
  {
    title: "Account",
    url: "/page/Account",
    iosIcon: personCircleOutline,
    mdIcon: personCircleSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <h1 id="logo-menu">
              MDI<small>Platform</small>
            </h1>
          </IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                  {appPage.title === "Inbox" && (
                    <IonBadge color="danger">2</IonBadge>
                  )}
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
