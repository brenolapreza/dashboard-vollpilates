import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vollpilates.com.br/wp-json/wc/v1/'
});


export default api;