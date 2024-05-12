import React, {useState} from 'react';
import { IonContent, IonButton,} from '@ionic/react';
import './ProgressInfo.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChartUsers from '../ChartUsers/ChartUsers';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartWater from '../ChartWater/ChartWater';

const ProgressInfo: React.FC = () => {
    const users = 66;
    const container = 40;
    const watter = 80;
const [showUser, setShowUser ] = useState(false)
const [showContainer, setShowContainer ] = useState(false) 
const [showWater, setShowWater ] = useState(false) 

const handleClickUser = () => {
    setShowUser(true)
    setShowContainer(false)
    setShowWater(false)
}

const handleClickContainer = () => {
    setShowUser(false)
    setShowContainer(true)
    setShowWater(false)
}

const handleClickWater = () => {
    setShowUser(false)
    setShowContainer(false)
    setShowWater(true)

}

  return (
          <IonContent fullscreen>
            <h1 className='reports'>Monitoreo y Analisis</h1>
              <div className='containerInfo'>
                  <div style={{ width: 100, height: 100 }}>
                      <p>Cantidad Usuarios</p>
                      <CircularProgressbar value={users} text={`${users}%`} styles={buildStyles({
                          rotation: 0,
                          strokeLinecap: 'butt',
                          textSize: '16px',
                          pathTransitionDuration: 0.5,
                          pathColor: `rgba(0, 143, 57, ${users / 100})`,
                          textColor: '#008f39',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                      })} />
                      <IonButton fill="clear" onClick={handleClickUser}>Ver más</IonButton>
                  </div>
                  <div style={{ width: 100, height: 100 }}>
                      <p>Contenedores activos</p>
                      <CircularProgressbar value={container} text={`${container}%`} styles={buildStyles({
                          rotation: 0,
                          strokeLinecap: 'butt',
                          textSize: '16px',
                          pathTransitionDuration: 0.5,
                          pathColor: `rgba(255,0,0, ${container / 100})`,
                          textColor: '#FF0000',
                          trailColor: '#d6d6d6',
                          backgroundColor: '#3e98c7',
                      })}/>
                      <IonButton fill="clear" onClick={handleClickContainer}>Ver más</IonButton>
                  </div>
                  <div style={{ width: 100, height: 100 }}>
                      <p>Disponibilidad agua</p>
                      <CircularProgressbar value={watter} text={`${watter}%`}/>                      
                      <IonButton fill="clear" onClick={handleClickWater}>Ver más</IonButton>

                  </div>
              </div>
              {showUser && <ChartUsers/>}
              {showContainer && <ChartContainer/>}
              {showWater && <ChartWater/>}
          </IonContent>
)};

export default ProgressInfo;
