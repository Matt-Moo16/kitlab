import React, {Component} from 'react';
import './AddPedal.css'

class AddPedal extends Component {

    state = {
        selectedPedal: 0
    }

    handleChange = e => {
        this.setState({selectedPedal: e.target.selectedIndex})
    }

    render() {
        return (
            <>
            <div className='AddPedalInfo'>
                <div className='PedalDropdown'>
                    <label htmlFor='pedals'>Choose a pedal:</label>
                    <select name='pedals' id='pedals' onChange={e => this.handleChange(e)}>
                        {this.props.pedalsInventory.map((pedal, i) => {
                            return <option key={i} id={i} value={pedal.name}>{pedal.name}</option>
                        })}
                    </select>
                </div>
                <div className='AddPedalName'>
                    <h2>{this.props.pedalsInventory[this.state.selectedPedal].name}</h2>
                </div>
                <div className='AddPedalImage'>
                    <img src={this.props.pedalsInventory[this.state.selectedPedal].product_image} alt='Pedal Image Will Display Here'></img>
                </div>
            </div>
            </>
        )
    }
}

export default AddPedal