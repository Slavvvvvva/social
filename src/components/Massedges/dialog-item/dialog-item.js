import React from 'react';
import { NavLink } from 'react-router-dom';
import u from './dialog-item.module.scss';
import uncnown from '../../Img/icons/uncnown.png'

const DialogItem = (props) => {
    return (
        <div className={u.list} >
            <NavLink to={`/meseges/${props.id}`} >
                <img src={uncnown} width="40px" alt='uncnown user icon' />
                
                    {props.dialog_name}
                
            </NavLink>
        </div>
    )
}

export default DialogItem;