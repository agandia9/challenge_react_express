const storage = {

    getToken(){
        return sessionStorage.getItem('token')
    },

    setToken(value){
        return sessionStorage.setItem('token', value)
    },

    removeToken(){
        return sessionStorage.removeItem('token')
    },

    setUser(value) {
        return sessionStorage.setItem('user', JSON.stringify(value))
    },

    getUser() {
        return JSON.parse(sessionStorage.getItem('user'))
    }
}

export default storage