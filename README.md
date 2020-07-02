# Build Your First Ionic App: Photo Gallery (Ionic React and Capacitor)

Get started with Ionic by building a photo gallery app that runs on iOS, Android, and the web - with just one codebase. This is the complete project referenced in the ["Your First App: React" guide](https://ionicframework.com/docs/react/your-first-app). Follow along to create a complete CRUD (create-read-update-delete) experience.

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## How It Works

After the user navigates to Tab 2 (Photos), they can tap/click on the camera button to open up the device's camera. After taking or selecting a photo, it's stored permanently into the device's filesystem. When the user reopens the app at a later time, the photo images are loaded from the filesystem and displayed again in the gallery. The user can tap on a photo to be presented with the option to remove the photo.

## Feature Overview
* App framework: [React](https://reactjs.org/)
* UI components: [Ionic Framework](https://ionicframework.com/docs/components)
  * Camera button: [Floating Action Button (FAB)](https://ionicframework.com/docs/api/fab)
  * Photo Gallery display: [Grid](https://ionicframework.com/docs/api/grid)
  * Delete Photo dialog: [Action Sheet](https://ionicframework.com/docs/api/action-sheet) 
* Native runtime: [Capacitor](https://capacitor.ionicframework.com)
  * Taking photos: [Camera API](https://capacitor.ionicframework.com/docs/apis/camera)
  * Writing photo to the filesystem: [Filesystem API](https://capacitor.ionicframework.com/docs/apis/filesystem)
  * Storing photo gallery metadata: [Storage API](https://capacitor.ionicframework.com/docs/apis/storage)

## Project Structure
* Tab2 (Photos) (`src/pages/Tab2.tsx`): Photo Gallery UI and basic logic.
* usePhotoGallery Hook (`src/hooks/usePhotoGallery.ts`): Logic encapsulating Capacitor APIs, including Camera, Filesystem, and Storage.

## How to Run; http://172.29.64.1:8100

> Note: It's highly recommended to follow along with the [tutorial guide](https://ionicframework.com/docs/react/your-first-app), which goes into more depth, but this is the fastest way to run the app. 

0) Install Ionic if needed: `npm install -g @ionic/cli`.
1) Clone this repository.
2) In a terminal, change directory into the repo: `cd photo-gallery-capacitor-react`.
3) Install all packages: `npm install || yarn`.
4) Run on the web: `ionic serve`.
5) Run on the build: `ionic build`.
6) Run on iOS or Android: `ionic cap add android || iOS` See [here](https://ionicframework.com/docs/building/running)
7) Run on the copy: `ionic cap copy`
8) Run on the sync: `ionic cap sync`
9) Run on the open: `ionic cap open android`

## 每次执行ionic build更新Web目录的构建（例如）（默认值：）时build，您需要将这些更改复制到本地项目中：`ionic cap copy`
## 注意：对代码的本机部分进行更新（例如添加新插件）后，请使用以下sync命令：`ionic cap sync`
## 实时重载
## 要启动实时重载服务器，请运行以下命令。
`ionic cap run android -l --external`
## 或者手动在capactitor.config.json 添加以下代码例如(url自行更换)
`  "server": {
    "url": "http://172.29.64.1:8100",
    "cleartext": true
  }`

`keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`