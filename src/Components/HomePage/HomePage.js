import React from 'react';
import logo from '../../images/kitlab-removebg-preview.png'
import {Link} from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
    return (
        <>
        <div className='HomePageDiv'>
            <header>
                <Link to='/'>
                    <img src={logo} alt='kitlab'/>  
                </Link>  
            </header>
            <main>
            <h2>Get your guitar gear in order before you buy.</h2> 
            <p>
                    Whether you are a new player or a seasoned player it can be hard to pick out the gear you want. 
                    Kitlab puts all the top guitar gear and puts it into one place to see how it will all look together. 
            </p>
            <button><Link to='/signUp'>Sign Up</Link></button>
            <button><Link to='/signIn'>Sign In</Link></button>
            </main>
        </div>
        </>
    )
}