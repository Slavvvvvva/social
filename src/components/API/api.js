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
export const getIsLogginned = () => {
    return instanse.get ('auth/me')
        .then(response => {
            return response.data
        })
}
export const getUserStatus = (userId) => {
    return instanse.get(`profile/status/${userId}`)
        .then(response =>{
            return response
        })
}
export const putUserStatus = (usearStatus) => {
    return instanse.put(`profile/status`,{status: usearStatus})
        .then(response =>{
            return response
        })
}
export const Login = (login, password , rememberMe) => {
    return instanse.post('/auth/login', {email:login, password: password, rememberMe: rememberMe})
        .then(response => {
            return response
        })
}
export const LogOut = () => {
    return instanse.post('auth/logout')
        .then(response => {
            return response
        })
}
export const putFoto = (foto) => {
    const photo = new FormData()
    photo.append("image", foto)
    return instanse.put('profile/photo', photo, {
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
}