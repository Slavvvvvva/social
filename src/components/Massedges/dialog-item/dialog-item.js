import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroupItem, Badge } from 'reactstrap';
import u from './dialog-item.module.scss';

const DialogItem = (props) => {
    return (
        <ListGroupItem color="info" className={u.list} >
            <NavLink to={`/meseges/${props.id}`} activeClassName={u.activ} >
                 {props.dialog_name} 
                 <Badge pill>{props.massege_counter}</Badge>
            </NavLink>
        </ListGroupItem>
    )
}

export default DialogItem;