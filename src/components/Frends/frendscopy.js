import React from 'react'
import { Button } from 'reactstrap'
import avatar from '../Img/982da289bae6d7738358d8fec285acc8.jpg'
import f from './f.module.scss'
import Loader from '../Loader/loader'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'



const Frends = React.memo((props) => {

    useEffect(() => {
        props.getUsersTC()
    }, [])

    const [Buutton, setButton] = useState([
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
    ])
    const [lastActivePagie , setlastActive] = useState(1) 

    const FrendItem = props.ConteinerFrends.FrendsPage.map((item) => {

        let link = "/myprofile/" + item.id

        let Post = () => {
            props.follouUserTC(item.id)
        }

        let Delete = () => {
            props.unFollouUserTC(item.id)
        }

        let TogleFollouServer = () => {
            item.followed ? Delete() : Post()
        }

        return (
            <div className={f.frends} >
                <div className={f.frends_logo}>
                    <NavLink to={link} >
                        <img src={item.photos.small ? item.photos.small : avatar} className={f.avatar} alt="avatar" />
                    </NavLink>

                    <Button onClick={TogleFollouServer} color={item.followed ? "primary" : "danger"} disabled={props.ContainerDisabledButton.some(i => i === item.id)}>{item.followed ? "follow" : "unfollow"}</Button>
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


    const ShowUsers = (id) => {
        props.getUsersButtonTC(id)
        setButton(Buutton.map((element) => {
            if (element.id === id) {
                setlastActive(id)
                return { ...element, active: true }
            }
            return { ...element, active: false }
        }))
    }


    const ChaingePageButtons = Buutton.map((item) => {
        return (
            <Button outline={item.active ? false : true} color="info" onClick={() => ShowUsers(item.id)} className={f.show_users} id={item.id} >  {item.id}  </Button>
        )
    })

    const back = () => {
        setButton(Buutton.map( (e) => {
            return { ...e, id : e.id-5, active: (e.id-5 === lastActivePagie)? true: false}
        }))
    }
    const forword = () => {
        setButton(Buutton.map( (e) => {
            return { ...e, id : e.id+5, active: (e.id+5 === lastActivePagie)? true: false}
        }))
    }


    if (!props.ContainerAuthData) return <Redirect to={'/login'} />

    return (

        <div className={f.frends_wrapper}>
            <div className={f.show_users_wrapper}>
                { (Buutton[0].id > 1) ?  <Button onClick = {back}> Назад </Button> : null}
                {ChaingePageButtons}
                <Button  onClick = {forword}> Вперед </Button>
            </div>
            {props.ContainerShowLoader ? <div className={f.loader}> <Loader /> </div> : null}
            {FrendItem}
        </div>
    )
})

export default Frends