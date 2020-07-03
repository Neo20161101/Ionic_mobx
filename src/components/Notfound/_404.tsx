import React from 'react'
import { IonImg } from '@ionic/react'
// import { observer, inject } from 'mobx-react'
import Icon_404 from '../../assets/static/img/notfound/icon_404.png'
import './style.css'
export interface Props {
  name?: string;
}

const Index: React.FC<Props> = (props) => {
  return (
    <div className="notfound_404">
      <div>
        <IonImg className='img' src={Icon_404}></IonImg>
        <div className='AtDivider'>暂无内容</div>
      </div>
    </div>
  );
};
export default Index
