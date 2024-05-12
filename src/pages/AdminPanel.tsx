import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProgressInfo from '../components/ProgressInfo/ProgressInfo';
import AvatarInfo from '../components/AvatarInfo/AvatarInfo';
import MenuList from '../components/MenuList/MenuList';
function AdminPanel() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
        <IonTitle>Menu AirWater</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <AvatarInfo/>
        <MenuList/>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Admin Panel</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProgressInfo />
      </IonPage>
    </>
  );
}
export default AdminPanel;


