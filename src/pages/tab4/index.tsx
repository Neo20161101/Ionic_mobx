import React, { useState } from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave
} from '@ionic/react';
import { observer, inject } from 'mobx-react';



const Index: React.FC = observer((props: any) => {
    const [photoToDelete, setPhotoToDelete] = useState();

    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter tab4');
    });

    useIonViewDidLeave(() => {
        console.log('ionViewDidLeave tab4');
    });

    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter tab4');
    });

    useIonViewWillLeave(() => {
        console.log('ionViewWillLeave tab4');
    });
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab4</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>这是tab4</div>
            </IonContent>
        </IonPage>
    );
});

export default Index;
