import React from 'react';
import logo from '../../images/kitlab-removebg-preview.png'
import {Link} from 'react-router-dom'
import './SignInPage.css'

export default function SignInPage() {
    return (
        <>
            <div className='SignInPage'>
                <header>
                    <Link to='/'>
                        <img src={logo} alt='kitlab'/>  
                    </Link>  
                </header>
                <div className='SignInDiv'>
                    <form className='SignInForm'>
                        <div className='username'>
                            <label htmlFor='SignIn_username'>Username:</label>
                            <input 
                            placeholder='Username'
                            type='text'
                            name='username'
                            id='SignIn_username'/>
                        </div>
                        <div className='password'>
                            <label htmlFor='SignIn_password'>Password:</label>
                            <input 
                            placeholder='Password'
                            type='password'
                            name='password'
                            id='SignIn_password'/>
                        </div>
                        <div className='SignIn_button'>
                            <button type='submit'>Sign In</button>
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