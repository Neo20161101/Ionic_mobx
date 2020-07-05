import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { observer, inject } from 'mobx-react';
const Details: React.FC = (props:any) => {
    console.log(props)
    const { fetchTest } = props.http
    const getFetch = () => {
        fetchTest({a:1})
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/tab2" />
                    </IonButtons>
                    <IonTitle>Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p onClick={getFetch}>Details</p>
            </IonContent>
        </IonPage>
    );
};

export default inject('http')(Details);
