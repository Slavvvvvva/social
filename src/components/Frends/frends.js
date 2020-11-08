import React from 'react';
import { Button } from 'reactstrap'
import avatar from '../Img/982da289bae6d7738358d8fec285acc8.jpg'
import f from './f.module.scss'

const Frends = (props) => {

    if (props.ConteinerFrends.FrendsPage.length === 0) {
        props.ContainerSetUsers([{ id: 1, followed: true, fullname: "Ivanov Ivan", status: "ssuper coder", addres: { sity: "Moscow", country: "Russia" } },
        { id: 2, followed: false, fullname: "Petrov Hui", status: "ssuper coder", addres: { sity: "Moscow", country: "Russia" } },
        { id: 3, followed: false, fullname: "Masha Hujasha", status: "ssuper coder", addres: { sity: "Moscow", country: "Russia" } },
        { id: 4, followed: true, fullname: "Ivanov NotIvan", status: "ssuper coder", addres: { sity: "Moscow", country: "Russia" } },])
    }

    const FrendItem = props.ConteinerFrends.FrendsPage.map((item) => {
        return (
            <div className={f.frends}>
                <div className={f.frends_logo}>
                    <img src={avatar} className={f.avatar} alt="avatar" />
                    <Button onClick={() => { props.ContainerToggleFollou(item.id) }} color={item.followed ? "primary" : "danger"}>{item.followed ? "follow" : "unfollow"}</Button>
                </div>
                <div className={f.frends_description}>
                    <h4>{item.fullname}</h4>
                    <p>{item.status}</p>
                    <p>{item.addres.country}</p>
                    <p>{item.addres.sity}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {FrendItem}
        </div>
    )
}
export default Frends