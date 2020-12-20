import React from 'react';
import { NavbarNav } from './NavbarNav';
import PropTypes from 'prop-types';
import { ImagenCabecera } from './ImagenCabecera';


export const Sidebar = ({ user, paths }) => {

    let items = [];

    for (let k in paths) {
        items.push(paths[k])
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
            <div className="pb-3">
                <ImagenCabecera />
                <div className="bottom-border"></div>
                <NavbarNav
                    path='/profile'
                    icon='fas fa-user'
                    title={user.userName}
                />
                <div className="bottom-border mb-4"></div>
                <ul className="navbar-nav flex-column mt-4">
                    {
                        items.map((value, i) => {
                            return (
                                <NavbarNav
                                    key={i}
                                    path={value.path}
                                    icon={value.icon}
                                    title={value.title}
                                />

                            )
                        })
                    }
                    <div className="bottom-border mb-4 py-3"></div>
                    <NavbarNav
                        path='/logout'
                        icon='fas fa-sign-out-alt'
                        title='Cerrar sesión'
                    />
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}

Sidebar.propTypes = {
    user: PropTypes.object.isRequired,
}
