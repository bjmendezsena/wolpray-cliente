import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import Desplegable from '../../Fragmentos/desplegable';
import { InputLimite } from '../../Fragmentos/InputLimite';


export default class FormularioCCAA extends Component {

    render() {
        let CCAA = this.props.obj;
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
                title = 'Información sobre empresa';
                break;
        }

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                {
                    (!readonly) ?
                        (<h1>{'Formulario para ' + title}</h1>) :
                        (<h1>{title}</h1>)
                }
                <br />
                <div className="container">
                    <form className="formulario row" >
                        {
                            (CCAA.stateid) ?
                                (<><InputComponent
                                    handleChange={this.props.funcion}
                                    name="stateid"
                                    label="ID"
                                    readOnly={true}
                                    value={CCAA.stateid.toString()}
                                /></>) : null
                        }
 
                        <InputComponent
                            handleChange={this.props.funcion}
                            name="stateName"
                            label="Nombre"
                            readOnly={readonly}
                            value={CCAA.stateName}
                        />

                        {
                            (readonly) ?
                                (<InputComponent
                                    handleChange={this.props.funcion}
                                    name='countryName'
                                    label="Pais"
                                    readOnly={readonly}
                                    value={CCAA.countryName}
                                />) : 
                                <Desplegable
                                    label='Pais'
                                    readValue={this.props.funcion}
                                    table='c_country'
                                    value={CCAA.countryid}
                                    name='countryid'
                                />
                        }
                        <InputLimite
                            handleChange={this.props.funcion}
                            name="state"
                            label="Nombre"
                            readOnly={readonly}
                            obj={CCAA}
                        />


                    </form>
                </div>
            </section>
        )
    }
}

FormularioCCAA.defaultProps = {
    orden: "V"
}

FormularioCCAA.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}