import React from 'react'

class UserStatus extends React.Component {
    debugger
    componentDidMount(){
        debugger
        this.props.getUserStatusTC(2)
    }
    state = {
        chaindg: true,
        value: 'Мой статус'
    }

    ChaingStatusON = () => {
        this.setState({
            chaindg:false
        }
        )
    }
    ChaingStatusOF = () => {
        this.setState({
            chaindg:true
        }
        )
    }
    
    render() {
        debugger
        return (
            <>
                {(!this.state.chaindg)? 
                <div>
                    <input autoFocus onBlur = {this.ChaingStatusOF} value = {this.state.value}/>
                </div> :
                <div>
                    <p onDoubleClick = {this.ChaingStatusON}> {this.props.ContainearUserStatus}</p>
                </div>}
            </>
        )
    }
}
export default UserStatus