import React from 'react'
import ReactDOM from 'react-dom'
import CreateSetupPage from './CreateSetupPage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateSetupPage />, div);
    ReactDOM.unmountComponentAtNode(div);
})