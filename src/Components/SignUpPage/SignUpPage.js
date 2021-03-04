import React, {Component} from 'react';
import logo from '../../images/kitlab-removebg-preview.png'
import {Link} from 'react-router-dom'
import './SignUpPage.css'
import APIService from '../../APIService'
import ValidationError from '../../ValidationError'

class SignUpPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: {
                value: '',
                touched: false
            },
            username: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            confirmPassword: {
                value: '',
                touched: false
            },
            hasError: false,
            error: ''
        }
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}})
    }

    updateUsername(username) {
        this.setState({username: {value: username, touched: true}})
    }

    updatePassword(password) {
        this.setState({password: {value: password, touched: true}})
    }

    updateConfirmPassword(confirmPassword) {
        this.setState({confirmPassword: {value: confirmPassword, touched: true}})
    }

    validateName() {
        const name = this.state.name.value.trim()
        if (name.length === 0) {
            return 'Name is required'
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
        if (password.length < 8 || password.length > 72) {
            return 'Password must be between 8 and 72 characters'
        }
    }

    validateConfirmPassword() {
        const confirmPassword = this.state.confirmPassword.value.trim()
        const password = this.state.password.value.trim()

        if (confirmPassword !== password) {
            return 'Passwords do not match'
        }
    }

    render () {
        const user = {name: this.state.name.value, username: this.state.username.value, password: this.state.password.value}
        const nameError = this.validateName()
        const usernameError = this.validateUsername()
        const passwordError = this.passwordError()
        const confirmPasswordError = this.confirmPasswordError()
        return (
            <>
            <div className='SignUpPage'>
                <header>
                    <Link to='/'>
                        <img src={logo} alt='kitlab'/>  
                    </Link>  
                </header>
                <div className='SignUpDiv'>
                    {this.state.hasError && <ValidationError message={this.state.error}/>}
                    <form className='SignUpForm'>
                        <div className='name'>
                            <label htmlFor='SignUp_name'>Name:</label>
                            <input 
                            placeholder='Name'
                            type='text'
                            name='name'
                            id='SignUp_name'
                            onChange={e => this.updateName(e.target.value)}/>
                            {this.state.name.touched && <ValidationError message={nameError}/>} 
                        </div>
                        <div className='username'>
                            <label htmlFor='SignUp_username'>Username:</label>
                            <input 
                            placeholder='Username'
                            type='text'
                            name='username'
                            id='SignUp_username'
                            onChange={e => this.updateUsername(e.target.value)}/>
                            {this.state.username.touched && <ValidationError message={usernameError}/>}
                        </div>
                        <div className='password'>
                            <label htmlFor='SignUp_password'>Password:</label>
                            <input 
                            placeholder='Password'
                            type='password'
                            name='password'
                            id='SignUp_password'
                            onChange={e => this.updatePassword(e.target.value)}/>
                            {this.state.password.touched && <ValidationError message={passwordError}/>}
                        </div>
                        <div className='confirmPassword'>
                            <label htmlFor='SignUp_confirmPassword'>Confirm Password:</label>
                            <input 
                            placeholder='Confirm Password'
                            type='password'
                            name='confirmPassword'
                            id='SignUp_confirmPassword'
                            onChange={e => this.updateConfirmPassword(e.target.value)}/>
                            {this.state.confirmPassword.touched && <ValidationError message={confirmPasswordError}/>}
                        </div>
                        <div className='button'>
                            <button type='submit'
                            onClick={e => {
                                try {
                                    APIService.postUser(user)
                                }
                                catch(err) {
                                    this.setState({hasError: true, error: err})
                                }
                            }}
                            disabled={
                                this.validateName() ||
                                this.validateUsername() ||
                                this.validatePassword() ||
                                this.validateConfirmPassword()
                            }>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <p>
                        <Link to='/signIn'>Sign In Here</Link>
                    </p>
                </div>
            </div>
            </>
        )
    }
}

export default SignUpPage