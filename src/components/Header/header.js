import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Img/zynga.svg'
import h from './h.module.scss'


let Header = (props) =>{

    const Logaut = () =>{
        props.LogautTC()
    }
    return (
        <>
         {props.ConteinerAuthUserData.isAuth? <button onClick = {Logaut}>LogOut</button>  : <NavLink to="/login" > Залогироватся</NavLink> } 
         <img className = {h.logo} src ={logo} alt="logo company"/>
         
        </>
    )
}

export default Header;