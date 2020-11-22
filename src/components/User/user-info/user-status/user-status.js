import React from 'react'

class UserStatus extends React.Component {
    
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
        return (
            <>
                {(!this.state.chaindg)? 
                <div>
                    <input autoFocus onBlur = {this.ChaingStatusOF} value = {this.state.value}/>
                </div> :
                <div>
                    <p onDoubleClick = {this.ChaingStatusON}> мой статус</p>
                </div>}
            </>

        )
    }
}
export default UserStatus