import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,useIonViewDidEnter} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { observer, inject } from 'mobx-react';
import './index.css';
// export interface Index {
//     props: any;
// }
const Index: React.FC = (props:any) => {
    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter tab3子组件');
    });
    const onClick_404 = (e:any) => {
        e.preventDefault()
        props.history.push({
            pathname: '/tab3/q'
        })
    }
    const onClick_Level_2 = () => {
        props.history.push({
            pathname: '/pages/tab2/details/index/1'//打开tab2的二级页面
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
                <IonButton onClick={onClick_404}>打开404</IonButton>
                <IonButton onClick={onClick_Level_2}>二级页面</IonButton>
                <ExploreContainer name="Tab 3 page" />
            </IonContent>
        </IonPage>
    );
};

export default inject('http')(Index);
