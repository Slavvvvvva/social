import React, { lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import s from './App.module.scss';
import HeaderContainer from './components/Header/headerContainer';
import Nawigation from './components/Navigation/nawigation';
import UserContainer from './components/User/user-container';
import ChatContainer from './components/Massedges/messeges.container'
//import FrendsContainer from './components/Frends/frendes-container'
import Login from './components/Login/login'
import { initializedTC } from './Redax/app-reduser'
import { connect } from 'react-redux'
import { compose } from 'redux';
import Loader from './components/Loader/loader';
import UserPortret from './components/UserPortret/user-portret';
const FrendsContainer = lazy(() => import('./components/Frends/frendes-container'))

class App extends React.Component {
   catchAllPromiseError = (promiseRejectionEvent) => {
      alert("Somsing wrong :( ");
   }
   componentDidMount() {
      this.props.initializedTC()
      window.addEventListener('unhandledrejection', this.catchAllPromiseError)
   }
   componentWillUnmount() {
      window.removeEventListener('unhandledrejection', this.catchAllPromiseError)
   }
   render() {
      if (!this.props.initialized) return <Loader />
      return (
         <BrowserRouter>
            <div className={s.body}>
               <div className={s.head}>
                  <div className={s.head_wrapper}>
                     <UserPortret />
                     <Nawigation />
                  </div>
                  <HeaderContainer />
               </div>
               <div className={s.content}>
                  <Switch>
                     <Route path='/meseges' render={() => <ChatContainer />} />
                     <Route path='/myprofile/:userId?' render={() => <UserContainer />} />
                     <Route path='/frends' render={() => <React.Suspense fallback={<Loader />}>  <FrendsContainer /> </React.Suspense>} />
                     <Route path='/login' render={() => <Login />} />
                     <Route exact path='/' render={() =>  <Redirect to = {'/login'} /> } />
                     <Route path='/*' render={() => <h1> 404 page not found </h1>} />
                  </Switch>

               </div>
            </div>
         </BrowserRouter>

      )
   }
}

const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized
   }
}

export default compose(
   connect(mapStateToProps, { initializedTC })
)(App)



