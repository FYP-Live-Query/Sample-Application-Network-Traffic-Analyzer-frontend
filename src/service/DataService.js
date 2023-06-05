import axios from 'axios';

class DataService {
  postData() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'POST' // Set the method to 'POST'
    };

    return axios.post('http://52.188.147.245:8081/publish', {
      query: 'SELECT ip@string,browser@string,date@string,time@string,traffic@int,eventTimestamp@long FROM networkTraffic',
      id: 'QWERTY',
    }, config);
  }

  postQuery(query) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    return axios.post('http://52.188.147.245:8081/setQuery', {
      query: query,
      id: 'QWERTY',
    }, config);
  }
}

export default new DataService();
