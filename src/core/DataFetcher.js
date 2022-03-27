// Data fetcher singleton class

import axios from 'axios';

class DataFetcher {
    fetch(url){
        return axios.get(url)
    }
}

// Instantiate the class
const DataFetcherSingleton = new DataFetcher();

// Freeze the variable
Object.freeze(DataFetcherSingleton);

export default DataFetcherSingleton;