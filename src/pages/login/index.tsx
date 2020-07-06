import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
    const [isLogin, setIsLogin] = useState(false);
    const hich = (e:any) => {
        // e.target.href = '/'
        window.location.href= '/'
        // props.history.replace({
        //     pathname: '/'
        // })
        console.log(props)
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
            <IonHeader>
                <IonToolbar>
                    <IonTitle>登陆页面</IonTitle>
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
