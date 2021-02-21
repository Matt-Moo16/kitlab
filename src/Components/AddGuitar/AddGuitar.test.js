import React from 'react'
import ReactDOM from 'react-dom'
import AddGuitar from './AddGuitar'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddGuitar />, div);
    ReactDOM.unmountComponentAtNode(div);
})