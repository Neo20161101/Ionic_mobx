import React,{useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,useIonViewDidEnter} from '@ionic/react';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import ExploreContainer from '../../components/ExploreContainer';
// import { observer, inject } from 'mobx-react';
import './index.css';
export interface Props {
    name?:string,
    LocalNotifications:any
}
const Index: React.FC = (props:any) => {
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        // const data2 = await LocalNotifications;
        console.dir(data);
    };
    const openNotifications = () => {
        const options = [{
            id: 1,
            text: 'Multi ILocalNotification 1',
            trigger: {at: new Date(new Date().getTime() + 3600)},
            data: { secret:123456 }
        },{
            id: 2,
            title: 'Local ILocalNotification Example',
            text: 'Multi ILocalNotification 2',
            trigger: {at: new Date(new Date().getTime() + 4200)},
            icon: 'http://example.com/icon.png'
        }]
        LocalNotifications.schedule(options)
    };
    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter tab子3组件');

        // LocalNotifications.prototype.schedule([{
        //     id: 1,
        //     text: 'Multi ILocalNotification 1',
        //     sound: 'file://sound.mp3',
        //     data: { secret:123456 },
        //     trigger: { at: new Date(new Date().getTime() + 10 * 1000) }
        // },{
        //     id: 2,
        //     title: 'Local ILocalNotification Example',
        //     text: 'Multi ILocalNotification 2',
        //     icon: 'http://example.com/icon.png',
        //     trigger: { at: new Date(new Date().getTime() + 10 * 1000) }
        // }]);
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
                <IonButton onClick={openScanner}>点击二维码扫描</IonButton>
                <IonButton onClick={openNotifications}>点击获取通知</IonButton>
                <ExploreContainer name="Tab 3 page" />
            </IonContent>
        </IonPage>
    );
};

export default Index;
