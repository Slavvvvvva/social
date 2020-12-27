import React from 'react';
import n from './n.module.scss';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const Nawigation = (props) => {

  return (
    <div className={n.navig}>
      <ul className={n.list_groop} >
        <li className={n.home}> <NavLink to={(props.ContainerAuthData)? `/myprofile/${props.ContainerAuthData.id}` : "/myprofile/"} activeClassName={n.activ_link}>Home</NavLink> </li>
        <li className={n.friends}> <NavLink to="/frends" activeClassName={n.activ_link} >Friends</NavLink></li>
        <li className={n.messeges}> <NavLink to="/meseges" activeClassName={n.activ_link} >Messeges</NavLink> </li>
        <li className={n.news}> <NavLink to="/news" activeClassName={n.activ_link} >News</NavLink></li>
        <li className={n.settings}> <NavLink to="/settings" activeClassName={n.activ_link} >Settings</NavLink></li>
      </ul>
    </div>
  )
}

let mapStateToProps = (state) => {
  return  {
      ConteinerFrends: state.UserPage.UserData,
  }
}

export default connect(mapStateToProps,{})(Nawigation)