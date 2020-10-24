import React from 'react';
import ci from './coment-item.module.scss';
import avatar from '../../../Img/982da289bae6d7738358d8fec285acc8.jpg'

const ComentItem = (props) => {
    return (
        <div className = {ci.coment_item}> 
            <img className = {ci.mini_logo} src ={avatar} alt = "mini avatar"/>
            <div>
                 <p>{props.comentText}</p>
            </div>
            <div> {props.likeCounter} likes</div>
        </div>
    )
}
 export default ComentItem;