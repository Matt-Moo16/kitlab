import React from 'react'
import ReactDOM from 'react-dom'
import AddPedal from './AddPedal'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPedal />, div);
    ReactDOM.unmountComponentAtNode(div);
})