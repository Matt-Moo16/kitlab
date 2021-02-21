import React from 'react';
import logo from '../../images/kitlab-removebg-preview.png'
import {Link} from 'react-router-dom'
import './SignUpPage.css'

export default function SignUpPage() {
    return (
        <>
        <div className='SignUpPage'>
            <header>
                <Link to='/'>
                    <img src={logo} alt='kitlab'/>  
                </Link>  
            </header>
            <div className='SignUpDiv'>
                <form className='SignUpForm'>
                    <div className='name'>
                        <label htmlFor='SignUp_name'>Name:</label>
                        <input 
                        placeholder='Name'
                        type='text'
                        name='name'
                        id='SignUp_name'/> 
                    </div>
                    <div className='username'>
                        <label htmlFor='SignUp_username'>Username:</label>
                        <input 
                        placeholder='Username'
                        type='text'
                        name='username'
                        id='SignUp_username'/>
                    </div>
                    <div className='password'>
                        <label htmlFor='SignUp_password'>Password:</label>
                        <input 
                        placeholder='Password'
                        type='password'
                        name='password'
                        id='SignUp_password'/>
                    </div>
                    <div className='confirmPassword'>
                        <label htmlFor='SignUp_confirmPassword'>Confirm Password:</label>
                        <input 
                        placeholder='Confirm Password'
                        type='password'
                        name='confirmPassword'
                        id='SignUp_confirmPassword'/>
                    </div>
                    <div className='button'>
                        <button type='submit'>
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