import React, { useEffect, useState } from 'react'

const UserStatus = (props) =>{

    let [chaindg, setChainging] = useState(true)
    let [value, setValue] = useState(props.ContainearUserStatus)

    useEffect( () => {
        props.getUserStatusTC((props.match.params.userId) ? props.match.params.userId : props.ContainerAuthData.id)
        setValue(props.ContainearUserStatus)
    }, [props.ContainearUserStatus])


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
                {(!chaindg) ?
                    <div>
                        <input onChange={statusChainge} autoFocus onBlur={ChaingStatusOF} value={value} />
                    </div> :
                        <p onDoubleClick={ChaingStatusON}> {props.ContainearUserStatus || 'статуса нет'}</p>
                    }
        </>
    )
}
export default UserStatus