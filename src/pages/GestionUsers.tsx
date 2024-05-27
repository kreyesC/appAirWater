import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AvatarInfo from '../components/AvatarInfo/AvatarInfo';
import MenuList from '../components/MenuList/MenuList';
import FormUsers from '../components/FormUsers/FormUsers';
function GestionUsuers() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu AirWater</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <AvatarInfo />
          <MenuList />
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Gestion Usuarios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FormUsers />
      </IonPage>
    </>
  );
}
export default GestionUsuers;


