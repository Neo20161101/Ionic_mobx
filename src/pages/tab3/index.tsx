import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,useIonViewDidEnter} from '@ionic/react';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import ExploreContainer from '../../components/ExploreContainer';
// import { observer, inject } from 'mobx-react';
import './index.css';
export interface Props {
    name?:string,
    localNotifications:any
}
class Index extends React.Component<any,any>{
    constructor(
        private localNotifications: LocalNotifications,
        props:any
    ) {
        super(props)
    }
    componentDidMount() {
        console.log("any,",this)
        // this.localNotifications.schedule({
        //     text: 'Delayed ILocalNotification',
        //     trigger: {at: new Date(new Date().getTime() + 3600)},
        //     led: 'FF0000',
        //     sound: null
        // });
    }
    render() {
        return (
            <div>
                Hello
            </div>
        );
    }

}
const Index2: React.FC = (props:any) => {

    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter tab子3组件');
        console.dir(LocalNotifications.prototype)

        LocalNotifications.prototype.hasPermission().then((data:boolean)=>{
            if(!data){
                LocalNotifications.prototype.requestPermission().then((data:boolean)=>{
                    console.log("data:"+data);
                })
            }
        })
        LocalNotifications.prototype.schedule([{
            id: 1,
            text: 'Multi ILocalNotification 1',
            sound: 'file://sound.mp3',
            data: { secret:123456 },
            trigger: { at: new Date(new Date().getTime() + 10 * 1000) }
        },{
            id: 2,
            title: 'Local ILocalNotification Example',
            text: 'Multi ILocalNotification 2',
            icon: 'http://example.com/icon.png',
            trigger: { at: new Date(new Date().getTime() + 10 * 1000) }
        }]);
        console.log(1111111111111111)
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

export default Index;
