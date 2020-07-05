import React from 'react'
import {IonImg, IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle} from '@ionic/react'
// import { observer, inject } from 'mobx-react'
import Icon_404 from '../../assets/static/img/notfound/icon_404.png'
import './style.css'
export interface Props {
    pages?: boolean;
}

const Index: React.FC<Props> = (props) => {
    console.log("props404,",props)
    if (props.pages){
        return (
            <div className="notfound_404">
                <div>
                    <IonImg className='img' src={Icon_404}/>
                    <div className='AtDivider'>暂无内容</div>
                </div>
            </div>
        );
    }
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonBackButton />
                  </IonButtons>
                  <IonTitle>404</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent className="notfound_404">
              <div>
                  <IonImg className='img' src={Icon_404}/>
                  <div className='AtDivider'>暂无内容</div>
              </div>
          </IonContent>
      </IonPage>

  );
};
export default Index
