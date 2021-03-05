import React, { Component } from 'react';

class AddGuitar extends Component {

    state = {
        selectedGuitar: 0
    }

    handleChange = e => {
        this.setState({selectedGuitar: e.target.selectedIndex})
    }

    render() {
        return (
            <>
            <div className='AddGuitarInfo'>
                <div className='GuitarDropdown'>
                    <label htmlFor='guitars'>Choose a Guitar:</label>
                    <select name='guitars' id='guitars' onChange={e => this.handleChange(e)}>
                        {this.props.guitarsInventory.map((guitar, i) => {
                           return <option key={i} id={i} value={guitar.name}>{guitar.name}</option>
                        })}
                    </select>
                </div>
                <div className='AddGuitarName'>
                    <h2>{this.props.guitarsInventory[this.state.selectedGuitar].name}</h2>
                </div>
                <div className='AddGuitarImage'>
                    <img src={this.props.guitarsInventory[this.state.selectedGuitar].product_image} alt='Guitar Image Will Display Here'></img>
                </div>
            </div>
            </>
        )
    }
}

export default AddGuitar