import React, { useState , useEffect} from 'react';
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

export const EditUsers: React.FC = () => {
    const { user, updateUsers } = useStorage();
    const [editUsers, setEditUsers] = useState<UsersEventChange | null>(null);
    const created = window.localStorage.getItem('id') || 0;   
    const editUser = user.find(element => element.created == created);

    useEffect(() => {
        if (editUser) {
            setEditUsers(editUser.users);
        }   
    }, [user, created, editUser])

    // const updateUser = async () => {
    //     if (editUsers) {
    //         await updateUsers(created, editUsers);
    //         window.localStorage.removeItem('id');
    //     }
    // };
    const handleChange = (key: keyof UsersEventChange) => (e: CustomEvent) => {
        if (editUsers) {
            setEditUsers({ ...editUsers, [key]: e.detail.value });
        }
    };

    console.log(editUsers)

    return (
        <IonContent fullscreen>
            <IonContent className="ion-padding">
                <div className='containerText'>
                    <IonText color="primary">
                        <h1 className='text-title'>Editar Usuario</h1>
                    </IonText>
                </div>
                <IonItem>
                    <IonInput label="codigo" value={editUsers?.codigo} labelPlacement="stacked" placeholder="Codigo"
                       onIonChange={handleChange('codigo')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="cedula" value={editUser?.users.cedula}  labelPlacement="stacked" placeholder="Cedula de Identidad" type="text"
                        onIonChange={handleChange('cedula')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="nombres" value={editUser?.users.nombres} labelPlacement="stacked" placeholder="Nombres" type="text"
                        onIonChange={handleChange('nombres')} ></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="apellidos" value={editUser?.users.apellidos} labelPlacement="stacked" placeholder="Apellidos" type="text"
                        onIonChange={handleChange('apellidos')}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="domicilio" value={editUser?.users.domicilio} labelPlacement="stacked" placeholder="Domicilio" type="text"
                        onIonChange={handleChange('domicilio')}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="email" value={editUser?.users.email}  labelPlacement="stacked" placeholder="Email" type="email" 
                        onIonChange={handleChange('email')}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="fono" value={editUser?.users.fono}  labelPlacement="stacked" placeholder="Fono" type="number"
                        onIonChange={handleChange('fono')}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="rol" value={editUser?.users.rol}  labelPlacement="stacked" placeholder="Usuario/Tecnico" type="text"
                        onIonChange={handleChange('rol')}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput label="comunidad"  value={editUser?.users.comunidad} labelPlacement="stacked" placeholder="Comunidad" type="text"
                        onIonChange={handleChange('comunidad')}></IonInput>
                </IonItem>
                <IonButton className="guardar" fill="outline" expand="block"onClick={() => updateUser()} >Guardar</IonButton>
                <IonButton className="guardar" fill="outline" expand="block" routerLink="/listUsers" >Lista Usuarios</IonButton>
            </IonContent>
        </IonContent>
    );
};

export default EditUsers;