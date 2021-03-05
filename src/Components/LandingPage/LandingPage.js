import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import ApiService from '../../APIService';
import TokenService from '../../TokenService';

class LandingPage extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            setups: [],
            hasError: false,
            error: ''
        }
    }

    componentDidMount() {
        ApiService.getSetups(TokenService.getAuthToken())
        .then(res => {
            const userId = TokenService.getIdFromToken()
            const usersSetups = res.filter(setup => setup.user_id === userId)
            this.setState({setups: usersSetups})
        })
        .catch(err => {
            this.setState({hasError: true, error: err})
        })
    }

    render() {
        return (
            <>
                <div className='SetupListDiv'>
                    <ul>
                        {this.state.setups ? (
                            this.state.setups.map((setup, i) => {
                                return  <li key={i}>
                                            <Link to={`/${setup.setup_id}`}>{setup.setup_name}</Link>
                                        </li>
                            })) : <div>Loading...</div>} 
                    </ul>
                </div>
                <div className='CreateSetupButton'>
                    <button>
                        <Link to='/user/createSetup'>
                            Create Custom Setup
                        </Link>
                    </button>
                </div>
            </>
        )
    }
}

export default LandingPage