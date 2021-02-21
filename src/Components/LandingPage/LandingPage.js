import React from 'react';
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            <div className='SetupListDiv'>
                <ul>
                    <li>
                        <Link to='/user/setup_id'>Custom Setup 1</Link>
                    </li>
                    <li>
                        <Link to='/user/setup_id'>Custom Setup 2</Link>
                    </li>
                    <li>
                        <Link to='/user/setup_id'>Custom Setup 3</Link>
                    </li>
                </ul>
            </div>
            <div className='CreateSetupButton'>
                <button>
                    <Link to='/user/createSetup'>
                        Create Custom Setup
                    </Link>
                </button>
            </div>
        </>
    )
}