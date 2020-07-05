import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonPage,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs, useIonViewDidEnter
} from '@ionic/react';
import {inject, Provider} from 'mobx-react';
import { IonReactRouter } from '@ionic/react-router';
// import Http from '../utils/http';
import Config from '../config/index'
// import { square, triangle, images } from 'ionicons/icons';
import Tab1 from '../pages/tabBar/tab1/index';
import Tab2 from '../pages/tabBar/tab2/index';
import Tab3 from '../pages/tabBar/tab3/index';
import Tab4 from '../pages/tabBar/tab4/index';
import Tab5 from '../pages/tabBar/tab5/index';
import Notfound from '../components/Notfound/_404';
import Details from '../pages/tab2/details/index';

const routes = [
    {path: "/pages/tabBar/tab1/index",component: Tab1},
    {path: "/tab2",component: Tab2},
    {path: "/tab2/details",component: Details},
    {path: "/tab3",component: Tab3},
    {path: "/tab4",component: Tab4},
    {path: "/tab5",component: Tab5}
];
const RouteWithSubRoutes = (route:any) => {
    return route.map((item: { routes: any; path: any; component: any; })=>
        <Route
            key={item.path}
            path={item.path}
            exact={true}
            render={props => {
                return (
                    <item.component {...props} />
                )
            }
            }
        />
    )

};
// interface Props {
//   config: any // 必要属性
// }
// interface IProps {
//   myStore?: MyStore;
//   id: string;
// }
const Index: React.FC = (props: any) => {
    useIonViewDidEnter(() => {
        if (props.location.pathname === '/login'){
            props.history.replace({
                pathname: '/'
            })
            console.log('首页',props);
        }
    });
    return(
        <IonPage>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        {RouteWithSubRoutes(routes)}
                        <Route path="/" render={() => <Redirect to="/pages/tabBar/tab1/index" />} exact={true} />
                        <Route component={Notfound} />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        {
                            Config.tabBar.list.map((item: any) =>
                                <IonTabButton key={item.pagePath} tab={item.pagePath} href={item.pagePath}>
                                    <IonIcon icon={item.iconPath} />
                                    <IonLabel>{item.Label}</IonLabel>
                                </IonTabButton>
                            )
                        }
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonPage>
    )
};

export default Index;
