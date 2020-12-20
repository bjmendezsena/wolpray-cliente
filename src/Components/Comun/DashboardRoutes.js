import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import ControllerMusic from '../Controladores/music/ControllerMusic';
import ControllerClub from '../Controladores/clubs/ControllerClub';
import Home from '../Paginas/Home';
import ControllerCompanies from '../Controladores/companies/ControllerCompanies';
import ControllerDresscode from '../Controladores/dresscode/ControllerDresscode';
import ControllerRole from '../Controladores/roles/ControllerRole';
import ControllerUsers from '../Controladores/users/ControllerUsers';
import ControllerCCAA from '../Controladores/ccaa/ControllerCCAA';
import ControllerProvince from '../Controladores/province/ControllerProvince';
import ControllerCity from '../Controladores/city/ControllerCity';
import ControllerEvents from '../Controladores/events/ControllerEvents';

import paths from './Paths';
import ControllerPais from '../Controladores/pais/ControllerPais';
import ControllerSlots from '../Controladores/slots/ControllerSlots';


export const DashboardRoutes = () => {


    const { MUSICA, HOME, CCAA, CLUBS, COMPANIES, DRESSCODE, ROLES, USERS , PROVINCE, CITY, EVENTS,COUNTRIES, SLOTS} = paths;

    return (
        <>
            <Switch>
                <Route exact path={HOME.path} component={Home} />
                <Route exact path={MUSICA.path} component={ControllerMusic} />
                <Route exact path={CLUBS.path} component={ControllerClub} />
                <Route exact path={COMPANIES.path} component={ControllerCompanies} />
                <Route exact path={DRESSCODE.path} component={ControllerDresscode} />
                <Route exact path={ROLES.path} component={ControllerRole} />
                <Route exact path={USERS.path} component={ControllerUsers} />
                <Route exact path={CCAA.path} component={ControllerCCAA} />
                <Route exact path={PROVINCE.path} component={ControllerProvince} />
                <Route exact path={CITY.path} component={ControllerCity} />
                <Route exact path={EVENTS.path} component={ControllerEvents} />
                <Route exact path={COUNTRIES.path} component={ControllerPais} />
                <Route exact path={SLOTS.path} component={ControllerSlots} />

                <Redirect to={HOME.path} />
            </Switch>
        </>
    )
}
