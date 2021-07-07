const axios = require('axios');
const SERVER_URL =   "http://"+window.location.hostname + ":4001";

// Create instance called instance
const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 3000,
    // headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('token')
    // },
});


const prefix = '/api/';

export default {
    getData: (url, query) => {
        query = query === undefined ? "" : query
        return (
            instance({
                'method': 'GET',
                'url': prefix + url + query,
            })
        )
    },

    getDataById: (url, id, params) =>
        instance({
            'method': 'GET',
            'url': prefix + url + '/' + id,
            params,

        }),
    createData: (url, data) =>
        instance({
            'method': 'POST',
            'url': prefix + url + '/',
            data
        }),
    setDataById: (url, id, data) =>
        instance({
            'method': 'PUT',
            'url': prefix + url + '/' + id,
            data
        }),
    deleteDataById: (url, id) =>
        instance({
            'method': 'DELETE',
            'url': prefix + url + '/' + id
        }),
    createData: (url, data) =>
        instance({
            'method': 'POST',
            'url': prefix + url + '/',
            data
        }),
}