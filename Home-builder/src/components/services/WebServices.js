 import axios from "axios";
 class WebServices{
    static getApi(url,data)
    {
      return axios.get(url,data);
    }
    static postApi(url,data)
    {
      return axios.post(url,data);
      
    }
}
export default WebServices;