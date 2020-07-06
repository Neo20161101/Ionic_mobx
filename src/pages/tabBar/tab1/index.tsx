import React, { useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react';
import { observer, inject } from 'mobx-react';
import Home from '../../tab1/index'
import Tab2 from "../../tab2";



const Index: React.FC = observer((props: any) => {
  const [photoToDelete, setPhotoToDelete] = useState();

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
  });
  return (
      <Home {...props} />
  );
});

export default inject('http')(Index);
