import React, {Component} from 'react';
import ApiService from '../../APIService'
import TokenService from '../../TokenService';
import ValidationError from '../../ValidationError';
import Header from '../Header/Header'

class SavedSetupPage extends Component {
    // Add verifacation for delete button

    constructor(props) {
        super(props)
        this.state = {
             name: '',
             guitars: [],
             amps: [],
             pedals: [],
             hasError: false,
             error: ''
        }
    }

    componentDidMount() {
        ApiService.getSetup(TokenService.getAuthToken(), parseInt(this.props.setupId))
        .then(res => {
            const info = JSON.parse(res.setup_info)
            this.setState({name: res.setup_name, guitars: info.gear.guitars,
            amps: info.gear.amps, pedals: info.gear.pedals})
        })
        .catch(err => {
            this.setState({hasError: true, error: err})
        })
    }

    handleDelete(event) {
        ApiService.deleteSetup(TokenService.getAuthToken(), parseInt(this.props.setupId))
        .then(res => {
            console.log(res)
            if (res.error) {
                this.setState({hasError: true, error: res.error})
            }
            else {
                let getUrl = window.location;
                let baseUrl = getUrl.protocol + "//" + getUrl.host + `/user/landingPage`;
                window.location.href = baseUrl
            }
        })
    }

    render() {
        return (
            <>
            <header>
                <Header />
            </header>
                <h2>{this.state.name}</h2>
                <ul>
                    {this.state.guitars ? (
                        this.state.guitars.map((guitar, i) => {
                            return  <li key={i}>
                                        <a href={guitar.url} target='_blank'><h2>{guitar.name}</h2></a>
                                        <img src={guitar.product_image} alt={guitar.name}></img>
                                    </li>
                    })) : <div></div>}
                    {this.state.amps ? (
                        this.state.amps.map((amp, i) => {
                            return  <li key={i}>
                                        <a href={amp.url} target='_blank'><h2>{amp.name}</h2></a>
                                        <img src={amp.product_image} alt={amp.name}></img>
                                    </li>
                    })) : <div></div>}
                    {this.state.pedals ? (
                        this.state.pedals.map((pedal, i) => {
                            return  <li key={i}>
                                        <a href={pedal.url} target='_blank'><h2>{pedal.name}</h2></a>
                                        <img src={pedal.product_image} alt={pedal.name}></img>
                                    </li>
                    })) : <div></div>}
                </ul>
                <div className='DeleteButtonDiv'>
                    <button type='button'
                    onClick={e => this.handleDelete(e)}>Delete</button>
                    {this.state.hasError && <ValidationError message={this.state.error}/>}
                </div>
            </>
        )
    }
} 

export default SavedSetupPage