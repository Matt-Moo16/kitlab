import React from 'react'
import ReactDOM from 'react-dom'
import AddAmp from './AddAmp'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddAmp />, div);
    ReactDOM.unmountComponentAtNode(div);
})