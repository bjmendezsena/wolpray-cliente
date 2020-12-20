import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';

export default class FormularioUsers extends Component {
    render() {
        let user = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false
        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Usuario</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (user.userid) ?
                                <InputComponent name="userid"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={user.userid} /> : null
                        }
                        <InputComponent name="userName "
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={user.userName}
                        />

                        <InputComponent name="mail"
                            handleChange={this.props.funcion}
                            label="Correo electrónico"
                            readOnly={readonly}
                            value={user.mail}
                        />
                        {
                            (user.password)?
                            <InputComponent name="password"
                            handleChange={this.props.funcion}
                            label="Contraseña"
                            readOnly={readonly}
                        />:null
                        }
                        <InputComponent name="userPhone"
                            handleChange={this.props.funcion}
                            label="teléfono"
                            readOnly={readonly}
                            value={user.userPhone}
                        />
                        <InputComponent name="birthdate"
                            handleChange={this.props.funcion}
                            label="Fecha de nacimiento"
                            readOnly={readonly}
                            value={user.birthdate}
                        />
                    </form>
                </div>
            </section>


        )
    }
}

FormularioUsers.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}