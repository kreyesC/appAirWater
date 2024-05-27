import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AvatarInfo from '../components/AvatarInfo/AvatarInfo';
import MenuList from '../components/MenuList/MenuList';
import ListUsers from '../components/ListUsers/ListUsers';
function ListUser() {
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
            <IonTitle>Lista de Usuarios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListUsers />
      </IonPage>
    </>
  );
}
export default ListUser;


