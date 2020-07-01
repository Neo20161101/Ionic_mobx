import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { observer,inject,Provider } from 'mobx-react';
import { IonReactRouter } from '@ionic/react-router';
import { square, triangle, images } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
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
// 	config:any; // 必要属性
// }
// interface IProps {
//   myStore?: MyStore;
//   id: string;
// }
// @inject('config')
// @observer 
export const Store = React.createContext('');
const store = React.useContext(Store);
const App: React.FC = (props) => (

    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tab1" component={Tab1} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab2/details" component={Details} exact={true} />
            <Route path="/tab3" component={Tab3} exact={true} />
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {
              console.log(store)
            }
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab One</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab Three</IonLabel>
          </IonTabButton> */}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
);

export default App;
