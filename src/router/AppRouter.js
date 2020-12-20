import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Rutas from '../Components/Comun/Rutas'
import LoginScreen from '../Components/LoginComponent/LoginScreen'
import RegisterComponent from '../Components/RegisterComponent/RegisterComponent'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/register' component={RegisterComponent} />
                    <Route path='/' component={Rutas} />
                </Switch>
            </div>
        </Router>
    )
}
