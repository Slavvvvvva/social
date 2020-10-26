import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import c from './coments.module.scss';
import ComentItem from './coment-item/coment-item.js';



const Coments = (props) => {


    let Posts = props.wall.map( (item) => {
        return(
            <ComentItem comentText = {item.massege} likeCounter = {item.likeCounter}/>
        )
      })


    return (
        <div className = {c.comments}>
            <div className = {c.coment_add}>
                <InputGroup>
                    <Input />
                        <InputGroupAddon addonType="append">
                        <Button color="secondary">Post</Button>
                        </InputGroupAddon>
                </InputGroup>
                 <br />
            </div>
            {Posts}    
            <br />
            <br />
        </div>
    )
}

export default Coments;