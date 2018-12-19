import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32c1e.firebaseio.com/'
})

export default instance;