import React from 'react';

export default function AddGuitar() {
    return (
        <>
        <div className='AddGuitarInfo'>
            <div className='GuitarDropdown'>
                <label htmlFor='guitars'>Choose a Guitar:</label>
                <select name='guitars' id='guitars'>
                    <option value='dropdown'>Dropdown</option>
                    <option value='will'>Will</option>
                    <option value='display'>Display</option>
                    <option value='guitars'>Guitars</option>
                </select>
            </div>
            <div className='AddGuitarName'>
                <h2>Guitar Name</h2>
            </div>
            <div className='AddGuitarImage'>
                <img src='#' alt='Guitar Image Will Display Here'></img>
            </div>
        </div>
        </>
    )
}