import React from 'react';

export default function AddAmp() {
    return (
        <>
            <div className='AddAmpInfo'>
            <div className='AmpDropdown'>
                <label htmlFor='amps'>Choose a Amp:</label>
                <select name='amps' id='amps'>
                    <option value='dropdown'>Dropdown</option>
                    <option value='will'>Will</option>
                    <option value='display'>Display</option>
                    <option value='amps'>Amps</option>
                </select>
            </div>
            <div className='AddAmpName'>
                <h2>Amp Name</h2>
            </div>
            <div className='AddAmpImage'>
                <img src='#' alt='Amp Image Will Display Here'></img>
            </div>
        </div>
        </>
    )
}