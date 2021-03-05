import React from 'react';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import CreateSetupPage from './Components/CreateSetupPage/CreateSetupPage'
import HomePage from './Components/HomePage/HomePage'
import SignInPage from './Components/SignInPage/SignInPage'
import SignUpPage from './Components/SignUpPage/SignUpPage'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header/Header'
import SavedSetupPage from './Components/SavedSetupPage/SavedSetupPage'
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <main className='App'>
      <Route  exact path='/'><HomePage /></Route>
      <Route path='/signUp'><SignUpPage /></Route>
      <Route path='/signIn'><SignInPage /></Route>
      <Switch>
      <PrivateRoute>
        <Route exact path='/:setup_id' render={
          (routeProps) => {
            const setupId = routeProps.match.params.setup_id
            return <SavedSetupPage setupId={setupId}/>
          }
        }></Route>
      </PrivateRoute>
      </Switch>
      <PrivateRoute>
        <Route path='/user'><Header /></Route>
      </PrivateRoute>
      <PrivateRoute>
        <Route exact path='/user/createSetup'><CreateSetupPage /></Route>
      </PrivateRoute>
      <PrivateRoute>
        <Route exact path='/user/landingPage'><LandingPage /></Route>
      </PrivateRoute>
    </main>
  );
}

export default App;