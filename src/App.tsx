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
  IonTabs
} from '@ionic/react';
import { Provider } from 'mobx-react';
import { IonReactRouter } from '@ionic/react-router';
import Http from './utils/http';
import Config from './config/index'
// import { square, triangle, images } from 'ionicons/icons';
import Tab1 from './pages/tabBar/tab1/index';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/tabBar/tab4/index';
import Notfound from './components/Notfound/_404';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
// interface Props {
//   config: any // 必要属性
// }
// interface IProps {
//   myStore?: MyStore;
//   id: string;
// }
const App: React.FC = (props: any) => (

    <Provider config={Config} http={Http}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab2/details" component={Details} exact={true} />
              <Route path="/tab3" component={Tab3} exact={true} />
              <Route path="/tab4" component={Tab4} exact={true} />
              {/*<Route path="/tab5" component={Tab4} exact={true} />*/}
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
              <IonPage>
                <Route component={Notfound} />
              </IonPage>
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
      </IonApp>
    </Provider>

);

export default App;
