import config from './config'

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY)
    }, 
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(username, password) {
        return window.btoa(`${username}:${password}`)
    },
    getIdFromToken() {
        const authToken = TokenService.getAuthToken()
            let base64Url = authToken.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(atob(base64)).user_id
    }
}

export default TokenService