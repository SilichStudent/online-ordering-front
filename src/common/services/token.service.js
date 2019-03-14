import { USER_TOKEN, MANAGER_TOKEN } from '../constants'

export const getUserToken = () => {
    return localStorage.getItem(USER_TOKEN);
}

export const getManagerToken = () => {
    return localStorage.getItem(MANAGER_TOKEN);
}

export const setUserToken = (token) => {
    localStorage.removeItem(MANAGER_TOKEN);
    return localStorage.setItem(USER_TOKEN, token);
}

export const setManagerToken = (token) => {
    localStorage.removeItem(USER_TOKEN);
    return localStorage.setItem(MANAGER_TOKEN, token);
}