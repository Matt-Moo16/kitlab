import config from './config'

const ApiService = {
    postUser(user) {
        return fetch (`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(user),
        })
        .then(res => 
            res.json()
        )
    },
    postLogin({username, password}) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({username, password}),
        })
        .then(res => 
            res.json()    
        )
    },
    getProducts() {
        return fetch(`${config.API_ENDPOINT}/products`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()    
        )
    },
    getProduct(productId) {
        return fetch(`${config.API_ENDPOINT}/products/${productId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getSetups(authToken) {
        return fetch(`${config.API_ENDPOINT}/setups`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postSetups(user_id, setup_name, setup_info, authToken) {
        return fetch(`${config.API_ENDPOINT}/setups`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json',
            },
            body: JSON.stringify({user_id, setup_name, setup_info})
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getSetup(authToken, setupId) {
        return fetch(`${config.API_ENDPOINT}/setups/${setupId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    deleteSetup(authToken, setupId) {
        return fetch(`${config.API_ENDPOINT}/setups/${setupId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
        )
    },
}

export default ApiService