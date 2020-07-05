import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
// import { observer, inject } from 'mobx-react';
import './Tab3.css';

const index: React.FC = (props:any) => {
    const hich = (e:any) => {
        e.preventDefault()
        props.history.push({
            pathname: '/tab3/q'
        })
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={hich}>跳转tab2</IonButton>
                <ExploreContainer name="Tab 3 page" />
            </IonContent>
        </IonPage>
    );
};

export default index;
