import React, {Component} from 'react';

class SavedSetupPage extends Component {
    // Add verifacation for delete button

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <>
                <ul>
                    <li>
                        <h2>Name Of Item</h2>
                        <img src='#' alt='Image of Item'></img>
                        <h3>Link To Item</h3>
                        <h3>Price of Item</h3>
                    </li>
                </ul>
                <div className='GrandTotal'>
                    <h2>Total Of All The Items</h2>
                </div>
                <div className='DeleteButtonDiv'>
                    <button type='button'>Delete</button>
                </div>
            </>
        )
    }
} 

export default SavedSetupPage