import React, { useState } from 'react';
import {
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave
} from '@ionic/react';
// import { observer, inject } from 'mobx-react';
import Tab2 from '../../tab2/index'



const Index: React.FC = (props: any) => {
  const [photoToDelete, setPhotoToDelete] = useState();

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter tab2');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave tab2');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter tab2');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave tab2');
  });
  return (
      <Tab2 {...props} />
  );
};

export default Index;
