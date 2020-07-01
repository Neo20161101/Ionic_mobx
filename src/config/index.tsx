import { observable } from 'mobx'
import { observer, useLocalStore } from 'mobx-react'
import { square, triangle, images, americanFootball } from 'ionicons/icons';
import HomeImg from '../static/img/tabBar/home.png'
const store = observable({
  pages: [
    "pages/index/index",
    "pages/tabBar/tabB/index",
    "pages/tabBar/tabC/index",
    "pages/tabBar/tabD/index",
    "pages/tabBar/myCenter/index",
    "pages/user/homepage/index",
    "pages/user/myOrder/index",
    "pages/user/myOrder/orderDetail/index",
    "pages/user/address/index",
    "pages/user/address/addressDetail/index",
    "pages/user/refund/index"
  ],
  tabBar: {
    list: [
      {
        pagePath: "/tab1",
        iconPath: triangle,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab One"
      },
      {
        pagePath: "/tab2",
        iconPath: images,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Photos"
      },
      {
        pagePath: "/tab3",
        iconPath: square,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Three"
      },
      {
        pagePath: "/tab4",
        iconPath: americanFootball,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Four"
      },
      {
        pagePath: "/tab5",
        iconPath: HomeImg,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Five"
      }
    ]
  }
})
//   const asd = 
export default store