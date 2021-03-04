import React, {Component} from 'react';
import PriceSideBar from '../PriceSideBar/PriceSideBar'
import AddAmp from '../AddAmp/AddAmp'
import AddGuitar from '../AddGuitar/AddGuitar'
import AddPedal from '../AddPedal/AddPedal'
import APIService from '../../APIService'
import ValidationError from '../../ValidationError'

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
            guitarsInventory: [],
            ampsInventory: [],
            pedalsInventory: [],
            guitarsToAdd: [],
            ampsToAdd: [],
            pedalsToAdd: [],
            hasError: false,
            error: ''
        }
    }

    handleGuitarButtonClick() {
        let joined = this.state.guitarComponent.concat(<AddGuitar guitarsInventory={this.state.guitarsInventory}/>)
        this.setState({
            guitarComponent: joined
        })
    }

    handleAmpButtonClick() {
        let joined = this.state.ampComponent.concat(<AddAmp ampsInventory={this.state.ampsInventory} onSelectedAmps={this.handleAmpToAdd}/>)
        this.setState({
            ampComponent: joined
        })
    }

    handlePedalButtonClick() {
        let joined = this.state.pedalComponent.concat(<AddPedal pedalsInventory={this.state.pedalsInventory}/>)
        this.setState({
            pedalComponent: joined
        })
    }

    handleAmpToAdd = (amp) => {
        let joined = this.state.ampsToAdd.concat(amp)
        this.setState({ampsToAdd: joined})
    }

    componentDidMount() {
        APIService.getProducts()
        .then(response => {
            response.map(res => {
                if (res.product_type === 'Guitar') {
                    let joined = this.state.guitarsInventory.concat(res)
                    this.setState({guitarsInventory: joined})
                }
                if (res.product_type === 'Amp') {
                    let joined = this.state.ampsInventory.concat(res)
                    this.setState({ampsInventory: joined})
                }
                if (res.product_type === 'Pedal') {
                    let joined = this.state.pedalsInventory.concat(res)
                    this.setState({pedalsInventory: joined})
                }
                
            })
        })
        .catch(err => {
            this.setState({hasError: true, error: err})
        }) 
    }

    handleSubmit(event) {
        event.preventDefault()

        if (document.getElementsByClassName("AddGuitarInfo").length == 0 && document.getElementsByClassName("AddPedalInfo").length == 0  && document.getElementsByClassName("AddAmpInfo").length == 0) {
            this.setState({hasError: true, error: "Please add items to your setup before saving."})
            return;
        }

        // get setup name, if applicable
        let setup_name = document.getElementById("SetupName").value
        if (!setup_name) {
            this.setState({hasError: true, error: "Please add a name to your setup before saving."})
            return;
        }

        // declare data object to add guitar, amp, and pedal objects on the page to
        let data = {"gear": {"guitars": [], "amps": [], "pedals": []}}

        // get guitars
        let guitarsDOM = Array.from(document.getElementsByClassName("AddGuitarInfo"));
        for(let i = 0; i < guitarsDOM.length; i++) {
            console.log(guitarsDOM[i].children[0].children[1].selectedIndex + 1)
            APIService.getProduct(guitarsDOM[i].children[0].children[1].selectedIndex + 1).then(
                response => {
                    data.gear.guitars.push(response);
                    console.log(data);
                }
            )
        }

        // get amps
        let ampsDOM = Array.from(document.getElementsByClassName("AddAmpInfo"));
        for(let i = 0; i < ampsDOM.length; i++) {
            console.log(ampsDOM[i].children[0].children[1].selectedIndex + 51)
            APIService.getProduct(ampsDOM[i].children[0].children[1].selectedIndex + 51).then(
                response => {
                    data.gear.amps.push(response);
                    console.log(data);
                }
            )
        }

        // get pedals
        let pedalsDOM = Array.from(document.getElementsByClassName("AddPedalInfo"));
        for(let i = 0; i < pedalsDOM.length; i++) {
            console.log(pedalsDOM[i].children[0].children[1].selectedIndex + 77)
            APIService.getProduct(pedalsDOM[i].children[0].children[1].selectedIndex + 77).then(
                response => {
                    data.gear.pedals.push(response);
                    console.log(data);
                }
            )
        }

        // there is a chance this might run into an async error where setup_info empty
        // b/c it executes faster than the requests above - if this happens,
        // may need to JSON stringify this inside the API request below
        let setup_info = JSON.stringify(data)

        // now call post request to add setup - currently have setup_info and setup_name (see logic above)
        /*
        // get user ID somehow
        // get auth token
        APIService.postSetups(user_id, setup_name, setup_info, authToken)
        */

    }

    render() {
        const guitarComponent = this.state.guitarComponent
        const ampComponent = this.state.ampComponent
        const pedalComponent = this.state.pedalComponent
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
                        <button type='submit'
                        onClick={e => this.handleSubmit(e)}>Save Setup</button>
                        {this.state.hasError && <ValidationError message={this.state.error}/>}
                    </form>
                </div>
            </>
        )
    }
    
}

export default CreateSetupPage