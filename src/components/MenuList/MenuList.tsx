import React from 'react';
import { IonItem, IonIcon, IonList, IonButton } from '@ionic/react';
import './MenuList.css';

function MenuList() {
  return (
    <>
    <IonList>
      <IonItem>
      <IonButton fill="clear">Gestion de Usuarios</IonButton>
      </IonItem>
      <IonItem>
      <IonButton fill="clear" routerLink="/adminPanel">Monitoreo y Analisis</IonButton>
      </IonItem>
      <IonItem>
      <IonButton fill="clear">Gestion de Alertas</IonButton>
      </IonItem>
      <IonItem>
      <IonButton fill="clear">Configuracion de Sistema</IonButton>
      </IonItem>
      <IonItem>
      <IonButton fill="clear">Solicitudes</IonButton>
      </IonItem>
    </IonList>
        <IonList className='containterList'>
        <IonItem>
        <IonButton fill="clear">
        Perfil
      </IonButton>
        </IonItem>
        <IonItem>
        <IonButton fill="clear" routerLink="/signUp">LogOut</IonButton>
        </IonItem>
      </IonList>
      </>
  );
}
export default MenuList;