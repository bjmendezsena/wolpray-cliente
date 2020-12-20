import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import { InputLimite } from './../../Fragmentos/InputLimite';

export default class FormularioPais extends Component {
    render() {
        let country = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Pais</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (country.countryId) ?
                                <InputComponent name="countryId"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={country.countryId} /> : null
                        }
                      
                        <InputComponent name="countryName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={country.countryName}
                        />
                        <InputLimite
                            handleChange={this.props.funcion}
                            name="country"
                            label=""
                            readOnly={readonly}
                            obj={country}
                        />
                    </form>

                </div>
            </section>


        )
    }
}
FormularioPais.defaultProps = {
    orden: "V"

}
FormularioPais.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']),
    obj: PropTypes.object,
    funcion: PropTypes.func
}