import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/kitlab-removebg-preview.png'

export default function Header() {
    return (
        <>
            <nav className='header'>
                <Link to='/user/landingPage'>
                    <img src={logo} alt='kitlab'/>
                </Link>
                <button>
                    <Link to='/'>Sign Out</Link>
                </button>
            </nav>
        </>
    )
}