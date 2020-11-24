import React from 'react'

class UserStatus extends React.Component {

    componentDidMount() {
        this.props.getUserStatusTC((this.props.match.params.userId) ? this.props.match.params.userId : this.props.ContainerAuthData.id)
    }
    state = {
        chaindg: true,
        value: this.props.ContainearUserStatus
    }


    ChaingStatusON = () => {
        this.setState({
            chaindg: false
        }
        )
    }
    ChaingStatusOF = () => {
        this.setState({
            chaindg: true
        })
        this.props.putUserStatusTC(this.state.value)
    }
    statusChainge = (e) => {
        this.setState({
            value: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.status) {
            this.setState({
                value: this.props.ContainearUserStatus
            })
        }
    }

    render() {

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
}
export default UserStatus