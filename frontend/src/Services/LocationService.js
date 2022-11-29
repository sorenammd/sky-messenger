import axios from 'axios';

class LocationService {
    getUserLocation() {
        return axios.get('');
    }
}

export default LocationService;