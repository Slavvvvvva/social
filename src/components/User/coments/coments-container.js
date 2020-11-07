import React from 'react';
import { AddPostActionCreator } from '../../../Redax/User-page-reduser';
import Coments from './coments'
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        PostsContainer: state.UserPage.PostsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPostContainer: (input) => {
            let action = AddPostActionCreator(input.current.value)
            dispatch(action)
            input.current.value = ""

        }
    }

}

const ComentsContainer = connect(mapStateToProps, mapDispatchToProps)(Coments)


export default ComentsContainer