import React from 'react';
import logo from '../Img/zynga.svg';
import h from './h.module.scss'

let Header = (props) =>{
  debugger
    return (
        <>
          <img className = {h.logo} src ={logo} alt="logo company"/>
         
        </>
    )
}

export default Header;