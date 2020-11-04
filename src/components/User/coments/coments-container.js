import React from 'react';
import ComentItem from './coment-item/coment-item.js';
import { AddPostActionCreator } from '../../../Redax/User-page-reduser';
import Coments from './coments'

let ComentsContainer = (props) => {

    let state = props.store.getState()
    let PostsContainer = state.UserPage.PostsData.map((item) => {
        return (
            <ComentItem comentText={item.massege} likeCounter={item.likeCounter} />
        )
    })

    let AddPostContainer = (input) => {
        let action = AddPostActionCreator(input.current.value)
        props.store.dispatch(action)
        input.current.value = ""
    }


    return (
        <Coments PostsContainer = {PostsContainer} AddPostContainer = {AddPostContainer} />
    )
}

export default ComentsContainer