import React, { useState } from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import { observer, inject } from 'mobx-react';
import {camera} from "ionicons/icons";



const Index: React.FC = observer((props: any) => {
    const [photoToDelete, setPhotoToDelete] = useState();
    const hich = () => {
        props.history.replace({
            pathname: '/tab2'
        })
    }
    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter login');
    });

    useIonViewDidLeave(() => {
        console.log('ionViewDidLeave login');
    });

    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter login');
    });

    useIonViewWillLeave(() => {
        console.log('ionViewWillLeave login');
    });
    return (
        <IonPage>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">登陆页面</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonButton onClick={hich}>跳转</IonButton>
                    {/*<IonButton href="/">Anchor</IonButton>*/}
                </IonFab>

            </IonContent>
        </IonPage>
    );
});

export default inject('config','http')(Index);
