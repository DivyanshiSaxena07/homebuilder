 import axios from "axios";
 class WebServices{
    static getApi(url,data)
    {
      return axios.get(url,data);
    }
}
export default WebServices;