import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';
import { Provider } from 'mobx-react';
import { IonReactRouter } from '@ionic/react-router';
import Http from './utils/http';
import Config from './config/index'
import Login from './pages/login/index'
import Home from './pages/index'

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
          <IonRouterOutlet>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Provider>

);

export default App;
