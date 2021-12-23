import httpCommon from "../commons/http-common";

const getHello = () =>{

    return httpCommon.get('/hi');

}

export default {getHello};
