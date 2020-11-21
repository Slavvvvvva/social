import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Img/zynga.svg'
import h from './h.module.scss'


let Header = (props) =>{
    return (
        <>
         {props.ConteinerAuthUserData.isAuth? <p>My page</p>  : <NavLink to="/login" > Залогироватся</NavLink> } 
         <img className = {h.logo} src ={logo} alt="logo company"/>
         
        </>
    )
}

export default Header;