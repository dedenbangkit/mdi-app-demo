import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonModal,
  IonBadge,
  IonLabel,
  IonIcon,
  IonItem,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { cash, mapSharp, calendar, idCardSharp } from "ionicons/icons";
import { dateUtil } from "../data/utils";
import { InvitationDetail } from "./InvitationDetail";
import MapChart from "../components/Maps";

const headerInfo = [
  {
    value: "invitation",
    label: "Invitation",
    icon: idCardSharp,
  },
  {
    value: "maps",
    label: "Maps",
    icon: mapSharp,
  },
];

const InvitationList = ({ data, setShowModal }) => {
  return data.slice(0, 100).map((x, i) => (
    <IonCard key={i} onClick={(e) => setShowModal(x.id)}>
      <IonCardHeader>
        <h4>{x.name}</h4>
      </IonCardHeader>
      <IonItem>
        <IonLabel>
          <IonBadge color="danger">
            <IonIcon icon={calendar} />
            {dateUtil.up(x.startDate)} - {dateUtil.up(x.endDate)}
          </IonBadge>
        </IonLabel>
        <IonLabel>
          <IonBadge color="success" style={{ float: "right" }}>
            <IonIcon icon={cash} />
            MLF {Math.floor(x.funds / 1000)}
          </IonBadge>
        </IonLabel>
      </IonItem>
    </IonCard>
  ));
};

export const Invitation: React.FC = () => {
  const [segment, setSegment] = useState("invitation");
  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<any>(false);
  useEffect(() => {
    if (data.length === 0) {
      fetch("/json/mali-project.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [data]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Invitation</IonTitle>
        </IonToolbar>
        <IonSegment
          style={{ backgroundColor: "#fff" }}
          onIonChange={(e: any) => setSegment(e.detail.value)}
          value={segment}
        >
          {headerInfo.map((x) => (
            <IonSegmentButton key={x.value} value={x.value} layout="icon-start">
              <IonIcon icon={x.icon} />
              <IonLabel>{x.label} </IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonHeader>
      <IonContent fullscreen>
        <IonModal isOpen={showModal !== false} cssClass="my-custom-class">
          {showModal && (
            <InvitationDetail
              data={data.find((x) => x.id === showModal)}
              close={() => setShowModal(false)}
            />
          )}
        </IonModal>
        {segment === "invitation" ? (
          <InvitationList data={data} setShowModal={setShowModal} />
        ) : (
          <MapChart projects={data} setShowModal={setShowModal} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Invitation;
