import { observable } from 'mobx'
import { square, triangle, images, americanFootball,person } from 'ionicons/icons';
import HomeImg from '../assets/static/img/tabBar/home.png'
const store = observable({
  pages: [
    "pages/tabBar/tab1/index",
    "pages/tabBar/tab2/index",
    "pages/tabBar/tab3/index",
    "pages/tabBar/tab4/index",
    "pages/tabBar/tab5/index",
    "pages/tab2/details/index/:id"
  ],
  tabBar: {
    list: [
      {
        pagePath: "/pages/tabBar/tab1/index",
        iconPath: triangle,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab One"
      },
      {
        pagePath: "/pages/tabBar/tab2/index",
        iconPath: images,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Photos"
      },
      {
        pagePath: "/pages/tabBar/tab3/index",
        iconPath: square,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Three"
      },
      {
        pagePath: "/pages/tabBar/tab4/index",
        iconPath: americanFootball,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Four"
      },
      {
        pagePath: "/pages/tabBar/tab5/index",
        iconPath: person,
        selectedIconPath: "static/img/tabBar/home-on.png",
        Label: "Tab Five"
      }
    ]
  }
})
export default store
