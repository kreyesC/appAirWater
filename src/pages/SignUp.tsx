import { IonContent, IonCheckbox, IonPage, IonItem, IonInput , IonText, IonButton,IonImg} from '@ionic/react';
import './SignUp.css';


const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className='container-logo'>
      <IonImg alt="AirWater logo" className="img-logo" src="https://i.ibb.co/KKczJnw/Air-Water-Logo.png"/>
      </div>

      <div className='containerText'>
      <IonText color="primary">
        <h1>Sign Up</h1>
      </IonText>
      </div>
      <IonItem>
        <IonInput label="Email" labelPlacement="stacked" placeholder="example@email.com"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Password" labelPlacement="stacked" type="password" value="password"></IonInput>
      </IonItem>
      <div className='containerCheck'>
      <IonCheckbox className="check-terms" labelPlacement="end">I agree to the <a href="#">Terms and conditions</a></IonCheckbox>
      </div>
      <IonButton className="buttonSignIn" fill="outline" expand="block" routerLink="/adminPanel">Sign Up</IonButton>
      <div className='containerLink'>
        <p>Have an account?</p>
        <IonButton className="ion-text-capitalize" fill="clear" routerLink="/home">Sign In</IonButton>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
