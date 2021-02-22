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


function App() {
  return (
    <main className='App'>
      <Route  exact path='/'><HomePage /></Route>
      <Route path='/signUp'><SignUpPage /></Route>
      <Route path='/signIn'><SignInPage /></Route>
      <Route path='/user'><Header /></Route>
      <Route exact path='/user/landingPage'><LandingPage /></Route>
      <Route exact path='/user/setup_id'><SavedSetupPage /></Route>
      <Route exact path='/user/createSetup'><CreateSetupPage /></Route>
      <p>To get to the view that a user sees when they are logged in add to the url path '/user/landingPage'.</p>
    </main>
  );
}

export default App;