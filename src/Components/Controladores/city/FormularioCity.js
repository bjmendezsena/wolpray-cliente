import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import Desplegable from '../../Fragmentos/desplegable';
import { InputLimite } from './../../Fragmentos/InputLimite';

export default class FormularioCity extends Component {
    render() {
        let City = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false;
        let title = '';
        switch (this.props.orden) {
            case 'I':
                title = 'añadir';
                break;
            case 'E':
                title = 'modificar';
                break;
            default:
                title = 'Información de la ciudad';
                break;
        }

        return (
            <div className="get_in_touch animate__animated animate__fadeIn">
                {
                    (!readonly) ?
                        (<h1 className="title">{'Formulario para ' + title}</h1>) :
                        (<h1 className="title">{title}</h1>)
                }
                <br />
                <div className="container">
                    <form className="formulario row" >


                        <><InputComponent
                            handleChange={this.props.funcion}
                            name="provinceid"
                            label="ID"
                            readOnly={true}
                            value={City.cityid.toString()}
                        /></>

                        <InputComponent
                            handleChange={this.props.funcion}
                            name="cityName"
                            label="Nombre"
                            readOnly={readonly}
                            value={City.cityName}
                        />
                        <InputComponent
                            handleChange={this.props.funcion}
                            name="latitude"
                            label="Latitud"
                            readOnly={readonly}
                            value={City.latitude}
                        />
                        <InputComponent
                            handleChange={this.props.funcion}
                            name="longitude"
                            label="Longitud"
                            readOnly={readonly}
                            value={City.longitude}
                        />


                        {
                            (!readonly) ?
                                (<Desplegable
                                    label='Provincia'
                                    readValue={this.props.funcion}
                                    table='c_provinces'
                                    value={City.provinceid}
                                    name='provinceid'
                                />) : null
                        }
                        <InputLimite
                            handleChange={this.props.funcion}
                            name="city"
                            label=""
                            readOnly={readonly}
                            obj={City}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

FormularioCity.defaultProps = {
    orden: "V"
}

FormularioCity.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}