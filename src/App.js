import React from 'react';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import s from './App.module.scss';
import HeaderContainer from './components/Header/headerContainer';
import Nawigation from './components/Navigation/nawigation';
import UserContainer from './components/User/user-container';
import ChatContainer from './components/Massedges/messeges.container'
import FrendsContainer from './components/Frends/frendes-container'
import Login from './components/Login/login'
import {initializedTC} from './Redax/app-reduser'
import { connect } from 'react-redux'
import { compose } from 'redux';
import Loader from './components/Loader/loader';

class App extends React.Component {
   componentDidMount() {
      this.props.initializedTC()
   }
   render() {
      if (!this.props.initialized) return <Loader/>
      return (
         <BrowserRouter>
            <div className={s.body}>
               <Row>
                  <Col className={s.head}> <HeaderContainer /> </Col>
               </Row>
               <Row className={s.content}>
                  <Nawigation />
                  <Route path='/meseges' render={() => <ChatContainer />} />
                  <Route path='/myprofile/:userId?' render={() => <UserContainer />} />
                  <Route path='/frends' render={() => <FrendsContainer />} />
                  <Route path='/login' render={() => <Login />} />
               </Row>
               <Row>
                  <Col className={s.foot}>подвал</Col>
               </Row>
            </div>
         </BrowserRouter>

      )
   }
}

const mapStateToProps = (state) =>{
   return {
      initialized: state.app.initialized
   }
}

export default compose(
   connect(mapStateToProps,{initializedTC})
)(App)
   


