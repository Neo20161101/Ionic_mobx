import { Fetch,hearder } from "./service";
// import store from "../AppStore";

const setHearder = () => {
    const { ApiKey } = {ApiKey:''};
    if(ApiKey){
        hearder.ApiKey = ApiKey;
    }else{
        // 防刷新处理
        hearder.ApiKey = sessionStorage.getItem("ApiKey") as string;
    }
}


class Http {
    // 测试
    fetchTest = (body:object) =>{
        setHearder();
        return Fetch("/users/test", "post", body);
    }
}

export default new Http()