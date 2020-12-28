import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAuthData, getFrends } from '../../Redax/users-selector'
import {getUserDataTC} from '../../Redax/User-page-reduser'
import u from './user-portret.module.scss'



const UserPortret = (props) => {
   
    useEffect( () => {
        let userId = props.AuthData.id
        debugger
        if(userId){
            props.getUserDataTC(userId)  
        }
    },[props.AuthData.id])

    

    return(
        <div>
            {(props.AuthData.id && props.UserData )? 
                <div className = {u.photo}>
                     <img src = {props.UserData.photos.large} alt = {"user foto"}/>
                     <p>{props.UserData.fullName}</p>
                </div> 
                :
                <div className ={u.text}> <p>React Js <br/> Way of Samuraj </p> </div>  } 

        </div>
    )
}

let mapStateToProps = (state) => {
    return  {
        AuthData: getAuthData(state),
        UserData: getFrends(state)
    }
}


export default connect(mapStateToProps,{getUserDataTC})(UserPortret)

