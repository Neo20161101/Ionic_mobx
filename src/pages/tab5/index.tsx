import React ,{ useState } from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid, IonRow, IonCol
} from '@ionic/react';
// import { observer, inject } from '@tarojs/mobx';
import ErroImg from '../../assets/static/img/user/待付款.png';
import Icon_after_sale from '../../assets/static/img/user/售后.png';
import Icon_foreshow from '../../assets/static/img/user/foreshow.png';
import Icon_store from '../../assets/static/img/user/商城.png';
import Icon_await_consignment from '../../assets/static/img/user/待发货.png';
import Icon_await_take from '../../assets/static/img/user/待收货.png';
import Icon_evaluate from '../../assets/static/img/user/评价.png';
import './index.css'
// interface Index {
//     props: PageStateProps;
// }

const Index: React.FC = (props: any) => {
    const [array] = useState(
        [
        {
        id: 10,
        img: ErroImg,
        span: '待付款'
    },
        {
            id: 20,
            'img': Icon_await_consignment,
            'span': '待发货'
        },
        {
            id: 30,
            'img': Icon_await_take,
            'span': '待收货'
        },
        {
            id: 40,
            'img': Icon_evaluate,
            'span': '待评价'
        }
    ]
    )
    const [toggleLogin] = useState(false)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>我的中心</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='user'>
                    <IonGrid className="top">
                        <img className="beijin" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E8%83%8C%E6%99%AF%E6%8B%B7%E8%B4%9D.png"></img>
                        <IonRow className='at-row' style={{position:'absolute',top: '60px' }}>
                            <IonCol size="3" className='at-col at-col-3'>
                                <div className="tx">
                                    {/*<img className="img1" src={stateStore.userInfo.avatarUrl}></img>*/}
                                </div>
                            </IonCol>
                            <IonCol size="9" className='at-col at-col-9'>
                                <span className="text1">"请登录"</span>
                                {
                                    !toggleLogin?
                                        <button className="img3" >
                                            微信号登陆
                                        </button>:""
                                }
                                <div>
                                    <span className="text2">ID: 123456</span>
                                </div>
                                <div>
                                    <div className="text4">
                                        <span>188****8866</span>
                                    </div>
                                </div>
                                <div className="text5">
                                    <span className="txt">注册时间:1324325</span>
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <div className="box">
                        <div className="cen1">
                            <div className="cen1_top">
                                <span className="cen1_txt1">我的订单</span>
                                <span className="cen1_txt2" >查看全部订单 &gt;</span>
                                <div></div>
                            </div>
                            <div className="cen1_con">
                                {
                                    array.map((item: { id: string | number | undefined; img: any; span: any }) => <div key={item.id}>
                                        <img src={item.img} style={{width:'22px'}}></img>
                                        <div className="cen1_con_text">{item.span}</div>
                                        <span>1</span>
                                    </div>)
                                }

                                <div>
                                    <img src={Icon_after_sale} style={{width:'22px'}}></img>
                                    <div className="cen1_con_text">退款/售后</div>
                                    <span>1</span>
                                </div>
                            </div>
                        </div >
                        <div className="cen2">
                            <img src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E7%BB%84%205%20%E6%8B%B7%E8%B4%9D.png"></img>
                        </div>
                        <div className="cen3">
                            <div>
                                <img className="cen3_img1" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E7%9B%B4%E6%92%AD%E9%A2%84%E5%91%8A.png"></img>
                                <img className="cen3_img2" src={Icon_foreshow}></img>
                                <span className="cen3_txt">开始 直播</span>
                            </div>
                            <div>
                                <img className="cen3_img1" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%95%86%E5%9F%8E2.png"></img>
                                <img className="cen3_img2" src={Icon_store}></img>
                                <span className="cen3_txt">
                                发布 商品
                            </span>
                            </div>
                        </div>
                        <div className="cen4">
                            <div className="cen4_top">
                                <span className="cen4_txt1">其他工具</span>
                                <div></div>
                            </div>
                            <div className="cen4_con">
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/33/0/优惠券(2).png"></img>
                                    <div>优惠券</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/34/0/购物车(1).png"></img>
                                    <div>购物车</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/34/0/地址.png"></img>
                                    <div>收货地址</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/实名认证(1).png"></img>
                                    <div>实名认证</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/推广.png"></img>
                                    <div>我的推广</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/邀请.png"></img>
                                    <div>更绑邀请</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/主页 (1).png"></img>
                                    <div>个人主页</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/设置 copy@2x.png"></img>
                                    <div>设置中心</div>
                                </div>
                            </div>
                        </div>
                        <div className="cen5">
                            <div className="cen4_top">
                                <span className="cen4_txt1">平台服务</span>
                                <div></div>
                            </div>
                            <div className="cen5_con">
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/积.png"></img>
                                    <div>积分商城</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/客服.png"></img>
                                    <div>联系客服</div>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/铃铛.png"></img>
                                    <div>消息中心</div>
                                    <span></span>
                                </div>
                                <div className="cen4_con1">
                                    <img src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/会员(2).png"></img>
                                    <div>开通服务</div>
                                </div>
                            </div>
                        </div>
                        <div className="cen6">
                            <div>wqz提供技术支持</div>
                        </div>
                    </div >
                </div >
            </IonContent>

        </IonPage>
    )
}

export default Index;
