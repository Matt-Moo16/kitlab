import React from 'react';

export default function AddPedal() {
    return (
        <>
        <div className='AddPedalInfo'>
            <div className='PedalDropdown'>
                <label htmlFor='pedals'>Choose a pedal:</label>
                <select name='pedals' id='pedals'>
                    <option value='dropdown'>Dropdown</option>
                    <option value='will'>Will</option>
                    <option value='display'>Display</option>
                    <option value='pedals'>Pedals</option>
                </select>
            </div>
            <div className='AddPedalName'>
                <h2>Pedal Name</h2>
            </div>
            <div className='AddPedalImage'>
                <img src='#' alt='Pedal Image Will Display Here'></img>
            </div>
        </div>
        </>
    )
}