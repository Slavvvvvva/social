import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAuthData } from '../../Redax/users-selector'
import {getLogginedUserNameAndFotoTC} from '../../Redax/authent-reduser'
import u from './user-portret.module.scss'



const UserPortret = (props) => {
   
    useEffect( () => {
        let userId = props.AuthData.id
        if(userId){
            props.getLogginedUserNameAndFotoTC(userId)  
        }
    },[props.AuthData.id])

    
    debugger
    return(
        <div>
            {(props.AuthData.id&& props.AuthData.loginedUserImg)? 
                <div className = {u.photo}>
                     <img src = {props.AuthData.loginedUserImg.large} alt = {"user foto"}/>
                     <p>{props.AuthData.fullName}</p>
                </div> 
                :
                <div className ={u.text}> <p>React Js <br/> Way of Samuraj </p> </div>  } 

        </div>
    )
}

let mapStateToProps = (state) => {
    return  {
        AuthData: getAuthData(state),
    }
}


export default connect(mapStateToProps,{getLogginedUserNameAndFotoTC})(UserPortret)

