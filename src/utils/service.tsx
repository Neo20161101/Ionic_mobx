import axios from 'axios';
import { toastController } from '@ionic/core';
const foodstp = "https://foodstp.com/";
const localhost = "http://localhost:3000/";

const hearder = {
    'X-Requested-With': 'XMLHttpRequest',
    'ApiKey': ''
}

async function setToast (message:string,header:string) {
    const toast = await toastController.create({
        header,
        message,
        color:'danger',
        duration: 2000
    });
    toast.present();
}


async function Fetch(url:string, method:any, body:object) {
    return await axios({
        method: method,
        url: url,
        baseURL: localhost,
        data: body,
        headers: hearder
    }).then(function(response:any) {
        console.log("response:", response);
        if (response.status >= 200 || response.status <= 304) {
            return response.data;
        } else {
            setToast('Your settings have been saved.',response.statusText)
        }
    }).catch(function(error) {
        console.error("error:", error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setToast(error.message,error.request.statusText)
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            setToast('已发出请求，未收到答复！',error.request.statusText)
        } else {
            // Something happened in setting up the request that triggered an Error
            setToast(error.message,error.stack)
        }
        return { status: 500 };
    });

}

export {hearder,Fetch}