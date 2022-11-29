import axios from 'axios';


class HttpService {


    constructor() {

        this.client = axios.create({
            baseURL: 'http://localhost:5000/api/v1/'
        });

    }

    get(url, config = null) {
        return this.client.get(url, config);
    }
    post(url, params, config = null) {

        return this.client.post(url, params, config);
    }
    delete(url, config = null) {
        return this.client.delete(url, config);
    }
    put(url, params) {
        return this.client.put(url, params);
    }


}

export default HttpService;