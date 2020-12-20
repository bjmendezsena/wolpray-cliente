import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const NavbarNav = ({ title = '', icon = 'fa-home', path}) => {

    
    
    let className = `${icon} text-light fa-lg mr-3`;
    return (


        <li className="nav-item" >
            <NavLink to={path} style = {{cursor: 'pointer'}} activeClassName="active" className="nav-link text-white p-3 mb-2 sidebar-link animate__animated animate__fadeInLeft">
                <i className={className} ></i>
                {title}
            </NavLink>
        </li>

    )
}

NavbarNav.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.elementType.isRequired,
}
