import axios from 'axios';

export default axios.create({
    baseURL: 'https://e0f7-2800-810-52a-dc0-544b-ec9-1b2c-d8c4.ngrok-free.app/api',
    //baseURL: 'http://localhost:3434/api',
});
