import axios from 'axios';

export default axios.create({
    baseURL: 'https://2e09-2800-810-52a-dc0-a082-65ec-cb17-9450.ngrok-free.app/api',
    //baseURL: 'http://localhost:3434/api',
});
