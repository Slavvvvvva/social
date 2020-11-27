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
            let action = AddPostActionCreator(input)
            dispatch(action)
        }
    }

}

const ComentsContainer = connect(mapStateToProps, mapDispatchToProps)(Coments)

export default ComentsContainer