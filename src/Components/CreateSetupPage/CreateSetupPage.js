import React, {Component} from 'react';
import PriceSideBar from '../PriceSideBar/PriceSideBar'
import AddAmp from '../AddAmp/AddAmp'
import AddGuitar from '../AddGuitar/AddGuitar'
import AddPedal from '../AddPedal/AddPedal'

class CreateSetupPage extends Component {
    //Create an array of react elements in state
    //import components 
    //Create render functions for the components 
    // When button clicked render for each component is called and added to the array in the state
    constructor(props) {
        super(props)
        this.state = {
            guitarComponent: [],
            ampComponent: [],
            pedalComponent: [],
        }
    }

    handleGuitarButtonClick() {
        let joined = this.state.guitarComponent.concat(<AddGuitar />)
        this.setState({
            guitarComponent: joined
        })
    }

    handleAmpButtonClick() {
        let joined = this.state.ampComponent.concat(<AddAmp />)
        this.setState({
            ampComponent: joined
        })
    }

    handlePedalButtonClick() {
        let joined = this.state.pedalComponent.concat(<AddPedal />)
        this.setState({
            pedalComponent: joined
        })
    }
    render() {
        const guitarComponent = this.state.guitarComponent
        const ampComponent = this.state.ampComponent
        const pedalComponent = this.state.pedalComponent
        console.log(this.state)
        return (
            <>
                <div className='AddGuitarDiv'>
                    <button type='button' onClick={e => this.handleGuitarButtonClick()}>Add Guitar</button>
                </div>
                <div className='AddAmpDiv'>
                    <button type='button' onClick={e => this.handleAmpButtonClick()}>Add Amp</button>
                </div>
                <div className='AddPedalDiv'>
                    <button type='button' onClick={e => this.handlePedalButtonClick()}>Add Pedal</button>
                </div>
                {guitarComponent.map((item, i) => {return <div key={i}>{item}</div>})}
                {ampComponent.map((item, i) => {return <div key={i}>{item}</div>})}
                {pedalComponent.map((item, i) => {return <div key={i}>{item}</div>})}
                <PriceSideBar />
                <div className='SaveSetupForm'>
                    <form>
                        <label htmlFor='SetupName'>Name Setup:</label>
                        <input
                        type='text'
                        name='setup-name'
                        id='SetupName'></input>
                        <button type='submit'>Save Setup</button>
                    </form>
                </div>
            </>
        )
    }
    
}

export default CreateSetupPage