import React from 'react'
import { NavLink} from 'react-router-dom'
import h from './header.module.scss'



let Header = (props) =>{

    const Logaut = () =>{
        props.LogautTC()
    
    }
 
    return (
        <div className = {h.wrapper}>
         {props.ConteinerAuthUserData.isAuth? <p className = {h.login} onClick = {Logaut}>LogOut</p>  : <NavLink className = {h.login}  to="/login" >LogIn </NavLink> } 
        </div>
    )
}

export default Header;