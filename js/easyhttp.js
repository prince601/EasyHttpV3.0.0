/*
    *EasyHTTP Library
    *Makes http Requests
    @Author: Prince kab
    @Version: 3.0.0
    @License: MIT
*/

class EasyHTTP {
    //Make an http GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData
    }
    //Make an http POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }

    //Make an http PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }

    //Make an http DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE'
        })
        return 'ressource deleted...';
    }


}