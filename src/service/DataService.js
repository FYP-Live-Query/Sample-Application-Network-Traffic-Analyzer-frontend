import axios from 'axios';
// FOR t IN NetworkTrafficTable SORT t.traffic DESC LIMIT 5 RETURN t

class DataService{

    postData(){
      return axios.post('http://localhost:8081/publish', { 
        query: 'ELECT ip@string,browser@string,date@string, time@string, traffic@int, eventTimestamp@long FROM networkTraffic',
        id: "QWERTY"
      });

    }

    postQuery(query) {
      return axios.post('http://localhost:8081/setQuery', { 
        query: query,
        id: "QWERTY"
      });
    }
  }
  
export default new DataService();