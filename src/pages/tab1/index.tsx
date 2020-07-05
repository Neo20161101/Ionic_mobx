import React ,{ useState } from 'react'
import {
    IonPage,
    IonContent,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonHeader, IonToolbar, IonTitle
} from '@ionic/react'
// import { observer, inject } from 'mobx-react'
import Schedule from './schedule/index';
import Invite from './invite/index'
import SsImg from '../../assets/static/img/home/ss.png'

import './index.css'


// interface Index {
//   props: string;
// }
const Index: React.FC = (props) => {
    const [Value,setValue] = useState('friends')
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>首页</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent className='home'>
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">首页</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <div className="nav">
                  <div className="nav_le">
                      <div className='at-icon at-icon-image'></div>
                      <span className="text1">邀好友</span>
                  </div>
                  <div className='nav_ri'>
                      <img className='nav_ri_ss' src={SsImg}></img>
                      <input className='input' placeholder='搜索想要的内容/主播/商品'></input>
                  </div>
              </div>
              <IonSegment value={Value} onIonChange={(e:any) => setValue(e.detail.value)}>
                  <IonSegmentButton value='friends'>
                      <IonLabel>我的关注</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value='enemies'>
                      <IonLabel>我的邀请</IonLabel>
                  </IonSegmentButton>
              </IonSegment>
              {Value=='friends'?<Schedule/>:<Invite/>}
              {/* <!--弹出层 --> */}
              {/* <AtModal className="tc_cen" closeOnClickOverlay={false} isOpened={toggleAttention}>
          <AtModalContent>
            <div className="at-article__h4">关注公账号</div>
            <div className="tc_Text">
              已为您复制公众号名称，请前往微信搜索
            <span style={{fontWeight:600}}>【wqz直播】</span>
            </div>
          </AtModalContent>
          <div className="AtButton">
            <AtButton type='primary' onClick={this.onAttentionClose} size='small'>好的</AtButton>
          </div>
        </AtModal>
        <div style={{height:60}}>
          <AtMessage />
        </div> */}
          </IonContent >
      </IonPage>
  )
}

export default Index;
