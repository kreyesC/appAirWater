import React from 'react';
import { IonContent, IonButton, IonPage, IonItem, IonInput , IonImg, IonText} from '@ionic/react';
import './Home.css';
import {useStorage} from '../hooks/useStorage'


const Home: React.FC = () => {  
  const { user } = useStorage();

  return (
    <IonPage>
      <IonContent fullscreen>
      <div className='container-logo'>
      <IonImg alt="AirWater logo" className="img-logo" src="https://i.ibb.co/KKczJnw/Air-Water-Logo.png"/>
      </div>
      <IonContent className="ion-padding">
        <div className='containerText'>     
      <IonText color="primary">
        <h1>Sign In</h1>
      </IonText>
      <p>Hi there, nice to see you again.</p>
      </div> 
      <IonItem>
        <IonInput label="Email" labelPlacement="stacked" placeholder="example@email.com"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Password" labelPlacement="stacked" type="password" value="password"></IonInput>
      </IonItem>
      <IonButton className="buttonSignIn" fill="outline" expand="block" routerLink="/adminPanel">Sign In</IonButton>
      <div className='containerButtons '>
      <IonButton className="ion-text-lowercase" fill="clear">forgot your password?</IonButton>
      <IonButton className="ion-text-capitalize" fill="clear" routerLink="/signUp">Sign Up</IonButton>
      </div>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
