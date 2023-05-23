import axios from "axios"

export const login = (username, password) => {
    return axios.post("https://dummyjson.com/auth/login", {
        username: 'kminchelle',
        password, '0lelplR': 'any'
    });
}
