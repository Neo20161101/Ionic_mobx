import React,{ useState } from 'react';
import { IonSlides, IonSlide } from '@ionic/react'
import Notfound_404 from "../../../components/Notfound/_404";
import Mingxinghu from '../../../assets/static/img/home/明星狐.png'
import Star from '../../../assets/static/img/home/星星.png'
import Rule from '../../../assets/static/img/home/规则引擎.png'
import Guidance_book from '../../../assets/static/img/home/指导书.png'
// import Icon_serve_vip from '../../../assets/static/img/home/icon_serve_vip.png'

export interface Props {

}

const Index: React.FC<Props> = (props) => {
  console.log("props,",props)
  const [TopBanner, setTopBanner] = useState([
    {
      id: 0,
      url: "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
    }, {
      id: 1,
      url: "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
    }, {
      id: 2,
      url: "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
    }, {
      id: 3,
      url: "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
    }
  ]);
  const [UpperList, setUpperList] = useState([]);


  const onAttentionClick = () => {

  }
  return (
    <div>
    <div className="cen">
      <IonSlides className='u-wrp-bnr top1 swiper-box' pager={true} options={{initialSlide: 1,speed: 400}}>
        {
          TopBanner.map(item =>
              <IonSlide key={item.id}>
                <img src={item.url} className='u-img-slide'></img>
              </IonSlide>
          )
        }
      </IonSlides >
      <div className="top2">
        <div className="AtNoticebar">
          <div className="view">
             您关注的主播001正在直播中！！！<span className="gg2">3千</span>人观看中
            <span>item.title</span>
          </div>
        </div>
        <div className="look" >查看</div>
      </div>
      <div className="top3">
        <img src={Mingxinghu} className="image3"></img>
        <div className="top3_cen">
          <span className="text3">wqz直播</span>
          <span className="text4">关注wqz直播公众号，主播动态随时了解！</span>
        </div>
        <div className="image4" onClick={onAttentionClick}>关注</div>
      </div >
      <div className="top5">
        {
          !UpperList.length && <Notfound_404 pages={true} />
        }
      </div>
    </div >
  </div>
  );
};
export default Index;
