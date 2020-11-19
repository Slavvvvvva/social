import * as axios from 'axios'

const instanse = axios.create({
    withCredentials : true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8c3b7b2e-1143-44b5-aa16-48f012da1a4b'
    }
})

export const getUsers = (currentPage = 1, pageSize = 10)  => {
    return instanse.get (`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data
    })
}

export const follouUser = (id) => {
    return instanse.post (`follow/${id}`)
        .then(responce => {
            return responce
        })
}
export const unfollouUser = (id) => {
    return instanse.delete (`follow/${id}`)
        .then(responce => {
            return responce
        })
}
export const getUserProfile = (userId) => {
    return instanse.get (`profile/${userId}`)
        .then(responce => {
            return responce
        })
}
