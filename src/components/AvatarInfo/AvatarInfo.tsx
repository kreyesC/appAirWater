import React from 'react';
import { IonAvatar } from '@ionic/react';
import './AvatarInfo.css';

function AvatarInfo() {
  return (
    <div className='containerAvatar'>
      <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
        <h1>John Doe</h1>
        <p>example@gmail.com</p>
    </div>
  );
}
export default AvatarInfo;