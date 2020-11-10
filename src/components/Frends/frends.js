import React from 'react';
import { Button } from 'reactstrap'
import avatar from '../Img/982da289bae6d7738358d8fec285acc8.jpg'
import f from './f.module.scss'
import * as axios from 'axios'

const Frends = (props) => {

    const ShowUsers = () => {
        if (props.ConteinerFrends.FrendsPage.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    console.log(responce)
                    props.ContainerSetUsers(responce.data.items)
                })
        }
    }

    const FrendItem = props.ConteinerFrends.FrendsPage.map((item) => {
        return (
            <div className={f.frends}>
                <div className={f.frends_logo}>
                    <img src={item.photos.small ? item.photos.small : avatar} className={f.avatar} alt="avatar" />
                    <Button onClick={() => { props.ContainerToggleFollou(item.id) }} color={item.followed ? "primary" : "danger"}>{item.followed ? "follow" : "unfollow"}</Button>
                </div>
                <div className={f.frends_description}>
                    <h4>{item.name}</h4>
                    <p>{item.status ? item.status : "Статуса нет"}</p>
                    <p> Страны нет </p>
                    <p> Адркса нет </p>
                </div>
            </div>
        )
    })

    return (
        <div className = {f.frends_wrapper}>
            <div className={f.show_users_wrapper}>
                <Button outline color="info" onClick={ShowUsers} className={f.show_users} >Показать пользователей</Button>
            </div>
            
            {FrendItem}
        </div>
    )
}
export default Frends