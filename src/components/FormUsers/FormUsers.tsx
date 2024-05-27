import React, { useState } from 'react';
import { IonContent, IonButton, IonItem, IonInput, IonText } from '@ionic/react';
import { useStorage } from '../../hooks/useStorage';


export interface UsersEventChange {
    value: any;
    codigo: string,
    cedula: string,
    nombres: string,
    apellidos: string,
    domicilio: string,
    email: string,
    fono: string
    rol: string,
    comunidad: string
}

export const FormUsers: React.FC = () => {
    const initialState = {
        codigo: '',
        cedula: '',
        nombres: '',
        apellidos: '',
        domicilio: '',
        email: '',
        fono: '',
        rol: '',
        comunidad: ''
    }
    const { user, addUser } = useStorage();
    const [users, setUsers] = useState(initialState);

    const createUser = async () => {
        await addUser(users);
        setUsers(initialState)
    }

    const handleChange = (key: keyof UsersEventChange) => (e: CustomEvent) => {
        if (users) {
            setUsers({ ...users, [key]: e.detail.value });
        }
    };

    return (
        <IonContent fullscreen>
            <IonContent className="ion-padding">
                <div className='containerText'>
                    <IonText color="primary">
                        <h1 className='text-title'>Agregar usuarios a la comunidad</h1>
                    </IonText>
                </div>
                <IonItem>
                    <IonInput label="codigo" value={users.codigo} labelPlacement="stacked" placeholder="Codigo"
                        onIonChange={handleChange('codigo')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="cedula" value={users.cedula} labelPlacement="stacked" placeholder="Cedula de Identidad" type="text"
                        onIonChange={handleChange('cedula')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="nombres" value={users.nombres} labelPlacement="stacked" placeholder="Nombres" type="text"
                        onIonChange={handleChange('nombres')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="apellidos" value={users.apellidos} labelPlacement="stacked" placeholder="Apellidos" type="text"
                        onIonChange={handleChange('apellidos')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="domicilio" value={users.domicilio} labelPlacement="stacked" placeholder="Domicilio" type="text"
                        onIonChange={handleChange('domicilio')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="email" value={users.email} labelPlacement="stacked" placeholder="Email" type="email"
                        onIonChange={handleChange('email')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="fono" value={users.fono} labelPlacement="stacked" placeholder="Fono" type="number"
                        onIonChange={handleChange('fono')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="rol" value={users.rol} labelPlacement="stacked" placeholder="Usuario/Tecnico" type="text"
                        onIonChange={handleChange('rol')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="comunidad" value={users.comunidad} labelPlacement="stacked" placeholder="Comunidad" type="text"
                        onIonChange={handleChange('comunidad')} ></IonInput>
                </IonItem>
                <IonButton className="guardar" fill="outline" expand="block" onClick={() => createUser()}>Guardar</IonButton>
                <IonButton className="guardar" fill="outline" expand="block" routerLink="/listUsers" >Lista Usuarios</IonButton>
            </IonContent>
        </IonContent>
    );
};

export default FormUsers;