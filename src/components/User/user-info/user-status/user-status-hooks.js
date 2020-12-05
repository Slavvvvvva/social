import React, { useState } from 'react'

const UserStatus = (props) =>{

    let [chaindg, setChainging] = useState(true)
    let [value, setValue] = useState(props.ContainearUserStatus)

    const ChaingStatusON = () => {
        setChainging(false)
    }
    const ChaingStatusOF = () => {
        setChainging(true)
        props.putUserStatusTC(value)
    }
    const statusChainge = (e) => {
        setValue (e.currentTarget.value)
    }


    return (
        <>
                {(!this.state.chaindg) ?
                    <div>
                        <input onChange={this.statusChainge} autoFocus onBlur={this.ChaingStatusOF} value={this.state.value} />
                    </div> :
                    <div>
                        <p onDoubleClick={this.ChaingStatusON}> {this.props.ContainearUserStatus || 'статуса нет'}</p>
                    </div>}
            </>
    )
}
export default UserStatus