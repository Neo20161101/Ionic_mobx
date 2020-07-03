import React,{ useState } from 'react';
// import { IonInput, IonSlides, IonSlide,IonTabs, IonTabBar, IonTabButton,IonIcon, IonLabel, IonBadge } from '@ionic/react'
import Mingxinghu from '../../../assets/static/img/home/明星狐.png'
import Icon_serve_vip from '../../../assets/static/img/home/icon_serve_vip.png'

export interface Props {
  name?: string
}

const Index: React.FC<Props> = (props) => {
  const [TopBanner, setTopBanner] = useState([])


  return (
    <div>
    <div className="yqy">
      <div className="n1">
        <span className="wz1">
          我的导师
          </span>
        <div className="con">
          <img className="tx1" src={Mingxinghu}></img>
           <img src="" className="pp"></img>
          <span className="tst1">--</span>
          <div className="tb">
            <img className="hui" src=''></img>
            <img className="qi" src=""></img>
          </div>
          <span className="tst2">微信号:--</span>
          <div className="fz">复制微信号</div>
        </div>
      </div>
      <div className="n1">
        <span className="wz1">
          邀请人
            </span>
        <div className="con">
          <img className="tx1" src={Mingxinghu}></img>
          {/* <img className="pp" src="../../images/sy/标签 拷贝.png"></img> */}
          <span className="tst1">--</span>
          <div className="tb">
            <img className="hui" src={Icon_serve_vip}></img>
          </div>
          <span className="tst2">微信号：--</span>
          <div className="fz">复制微信号</div>
        </div>
      </div>
      <div className="n1">
        <span className="wz1">
          我的
            </span>
        <div className="con">
          <img className="tx1" src={Mingxinghu}></img>
          <span className="tst1">nickName</span>
          <div className="tb">
          </div>
          <div className="fillInWechat">
            <input
              name=''
              type='text'
              placeholder='点此填写微信号'
            />
          </div>
          <img className="tx" src=""></img>
        </div>
      </div>
      <div className="n1">
        <span className="wz1">
          我的粉丝
            </span>
        <span className="wz2">丨仅显示已填写微信号的粉丝</span>
        <div className="con">
          <span className="zw">—— 暂无数据~ ——</span>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Index;