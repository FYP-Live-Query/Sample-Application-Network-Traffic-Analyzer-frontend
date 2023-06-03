import axios from 'axios';
// FOR t IN NetworkTrafficTable COLLECT browser = t.browser WITH COUNT INTO value SORT value DESC RETURN { browser: browser, totalCount: value }

class BrowserService{

    postData(){
      return axios.post('http://localhost:8081/orderInfo', {
        query: 'SELECT ip@string,browser@string,date@string, time@string, traffic@int, eventTimestamp@long FROM networkTraffic',
        id: "QWERTY"
      });

    }  
  }

export default new BrowserService();