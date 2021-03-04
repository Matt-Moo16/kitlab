import React, {Component} from 'react';

class AddAmp extends Component {

    state = {
        selectedAmp: 0
    }
    
    handleChange = e => { 
        this.props.onSelectedAmps(e.target.selectedIndex + 51)
        console.log(e.target.selectedIndex + 51)
        this.setState({selectedAmp: e.target.selectedIndex})
    }

    render() {
        return (
            <>
                <div className='AddAmpInfo'>
                <div className='AmpDropdown'>
                    <label htmlFor='amps'>Choose a Amp:</label>
                    <select name='amps' id='amps' onChange={e => this.handleChange(e)}>
                        {this.props.ampsInventory.map((amp ,i) => {
                            return <option key={i} id={i} value={amp.name}>{amp.name}</option>
                        })}
                    </select>
                </div>
                <div className='AddAmpName'>
                    <h2>{this.props.ampsInventory[this.state.selectedAmp].name}</h2>
                </div>
                <div className='AddAmpImage'>
                    <img src={this.props.ampsInventory[this.state.selectedAmp].product_image} alt='Amp Image Will Display Here'></img>
                </div>
            </div>
            </>
        )
    }    
}

export default AddAmp