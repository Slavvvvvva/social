import React from 'react'
import avatar from '../Img/982da289bae6d7738358d8fec285acc8.jpg'
import classNames from 'classnames/bind';
import f from './f.module.scss'
import Loader from '../Loader/loader'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

let cx = classNames.bind(f);

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
        let className = cx({
            followed: item.followed,
          });
 
        return (
                <div className={f.frends_item} key = {"dkjkdjkdj"}>
                    <NavLink to={link} >
                        <img src={item.photos.small ? item.photos.small : avatar} className={f.avatar} alt="avatar" />
                    </NavLink>
                    <div className={f.frends_description}>
                        <h4>{item.name}</h4>
                    </div>
                    <button className= {className} onClick={TogleFollouServer} disabled={props.ContainerDisabledButton.some(i => i === item.id)} key={item.id}>{item.followed ? "Follow" : "Following"} </button>
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
        let className = cx({
            showUsers: true,
            activeButton: item.active 
          });
        return (
            <button className={className} onClick={() => ShowUsers(item.id)} key={item.id} >  {item.id}  </button>
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
    let className = cx({
        arrouButton: true, 
      });


    if (!props.ContainerAuthData) return <Redirect to={'/login'} />

    return (
        <>
            <div className={f.show_users_wrapper}>
                { (Buutton[0].id > 1) ?  <button className= {className} onClick = {back}> {`<<`} </button> : null}
                {ChaingePageButtons}
                <button className= {className}   onClick = {forword}> {`>>`} </button>
            </div>
            
                <div className={f.frends_wrapper}>
                    <span>Mutual followers</span>
                    {props.ContainerShowLoader ? <div className={f.loader}> <Loader /> </div> : null}
                    {FrendItem}
                </div>
            
            
        </>
    )
})

export default Frends