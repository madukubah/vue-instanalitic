import axios from 'axios'
import config from '../config'

export default {
  request (method, uri, data = null) {

    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }
    var url = config.serverURI + uri
    switch( method ){
      case "get":
          return axios.get( url,{ crossDomain : true, }) 
        break;
      case "post":
          
          return axios.post( url, data, { crossDomain : true, }) 
        break;
      case "put":
          return axios.put( url, data, { crossDomain : true, }) 
        break;
      case "delete":
          return axios.delete( url, data, { crossDomain : true, }) 
        break;

    }
    
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8'
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    // var _config = {
    //   // headers: {'Access-Control-Allow-Origin': '*'}
    //   crossdomain: true 
    // }
    // return axios({ method, url, data })
  }
}
