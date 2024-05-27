import React, { useState, useEffect } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonCardContent, IonButton } from '@ionic/react';
import { useStorage } from '../../hooks/useStorage';
import './ListUsers.css'


export const ListUsers: React.FC = () => {
    const { user, removeUser } = useStorage();

    const deleteUser = async (created:string) => {
        removeUser(created)
    }
    return (
        <IonContent fullscreen>
            <IonContent className="ion-padding">
                <h1 className="title">Lista Usuarios</h1>
                <IonContent>
                    <div className="row">
                        {user.map((element, index) => (
                            <IonCard key={index}>
                            <IonCardHeader>
                              <IonCardTitle>{element.users.nombres}</IonCardTitle>
                              <IonCardSubtitle>{element.users.codigo}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>{element.users.rol}  de la comunidad  {element.users.comunidad}</IonCardContent>
                            <IonButton fill="clear" routerLink={'/editUsers'} onClick={() => window.localStorage.setItem("id", element.created)}>Edit</IonButton>
                            <IonButton fill="clear" color="danger" onClick={() => deleteUser(element.created)} >Delete</IonButton>
                          </IonCard>
                        ))}
                    </div>
                    <IonButton className="guardar" fill="outline" expand="block" routerLink="/gestionUsers">Gestion Usuarios</IonButton>
                </IonContent>
            </IonContent>
        </IonContent>

    )


}

export default ListUsers;