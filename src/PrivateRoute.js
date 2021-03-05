import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import TokenService from './TokenService'

export default function PrivateRoute({children, ...props}) {
    return (
        <Route 
            {...props}
           render={ () => 
            (TokenService.hasAuthToken()
                  ? [children]
                  : <Redirect
                      to='/signIn'
                      />)
                }
            />
    )
}