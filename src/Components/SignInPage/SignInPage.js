import React, {Component} from 'react';
import logo from '../../images/kitlab-removebg-preview.png'
import {Link, Redirect} from 'react-router-dom'
import './SignInPage.css'
import APIService from '../../APIService'
import TokenService from '../../TokenService';
import ValidationError from '../../ValidationError'

class SignInPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: {
                value: '', 
                touched: false
            }, 
            password: {
                value: '',
                touched: false, 
            },
            hasError: false,
            error: '',
            userIsAuthenticated: false, 
            userId: 0,
        }
    }

    validateUsername() {
        const username = this.state.username.value.trim()
        if (username.length === 0) {
            return 'Username is required'
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if (password.length === 0) {
            return 'Password is required'
        }
    }

    updateUsername(username) {
        this.setState({username: {value: username, touched: true}})
    }

    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    }

    handleSubmit(event) {
        event.preventDefault()
        const username = this.state.username.value
        const password = this.state.password.value
        APIService.postLogin({username, password})
        .then(response => {
            if (response.error) {
                this.setState({hasError: true, error: response.error})
            }
            else {
                TokenService.saveAuthToken(response.authToken)
                this.setState({userIsAuthenticated: true, userId: response.userId})
            }
        })
        .catch((response) => {
            this.setState({hasError: true, error: response.error})
        })
    }

    render() {
        const usernameError = this.validateUsername()
        const passwordError = this.validatePassword()
        
        return (
            <>
                <div className='SignInPage'>
                    <header>
                        <Link to='/'>
                            <img src={logo} alt='kitlab'/>  
                        </Link>  
                    </header>
                    <div className='SignInDiv'>
                        {this.state.hasError && (<ValidationError message={this.state.error}/>)}
                        <form className='SignInForm'>
                            <div className='username'>
                                <label htmlFor='SignIn_username'>Username:</label>
                                <input 
                                placeholder='Username'
                                type='text'
                                name='username'
                                id='SignIn_username'
                                onChange={e => this.updateUsername(e.target.value)}/>
                                {this.state.username.touched && (<ValidationError message={usernameError}/>)}
                            </div>
                            <div className='password'>
                                <label htmlFor='SignIn_password'>Password:</label>
                                <input 
                                placeholder='Password'
                                type='password'
                                name='password'
                                id='SignIn_password'
                                onChange={e => this.updatePassword(e.target.value)}/>
                                {this.state.password.touched && (<ValidationError message={passwordError}/>)}
                            </div>
                            <div className='SignIn_button'>
                                <button type='submit'
                                disabled={this.validateUsername() || this.validatePassword()}
                                onClick={e => this.handleSubmit(e)}>Sign In</button>
                                {this.state.userIsAuthenticated && (<Redirect to='/user/landingPage'/>)}
                            </div>
                        </form>
                    </div>
                    <div>
                        <p>
                            <Link to='/signUp'>Sign Up Here</Link>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default SignInPage