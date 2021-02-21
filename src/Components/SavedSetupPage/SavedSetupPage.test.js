import React from 'react'
import ReactDOM from 'react-dom'
import SavedSetupPage from './SavedSetupPage'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SavedSetupPage />, div);
    ReactDOM.unmountComponentAtNode(div);
})