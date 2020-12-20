import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import SubirImagen from '../../Fragmentos/SubirImagen';
import Imagen from '../../Fragmentos/Imagen';





export default class FormularioEvents extends Component {
    render() {
        let event = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false;

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">ID Evento</h1>
                <div className="container">
                    <form className="formulario row">
                        <div className="container">
                            {(!readonly) ?
                                <SubirImagen /> : null

                            }
                            <Imagen imageUrl={event.event_imagePral} with={20} />
                        </div>
                        {
                            (event.eventid) ?
                                <InputComponent name="eventid"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={event.eventid} /> : null
                        }


                        <InputComponent name="eventName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={event.eventName}
                        />
                        <InputComponent name="clubid"
                            handleChange={this.props.funcion}
                            label="Ide Club"
                            readOnly={readonly}
                            value={event.clubid}
                        />
                        {

                            /*EDAD MINIMA */

                            <InputComponent name="event_minimunAge"
                                handleChange={this.props.funcion}
                                type='number'
                                label="Edad mínima"
                                readOnly={readonly}
                                value={event.event_minimunAge} />

                        }
                        <InputComponent
                            type='textarea'
                            name="eventDescription"
                            handleChange={this.props.funcion}
                            label="Descripción"
                            readOnly={readonly}
                            value={event.eventDescription}
                        />

                        {/*FECHA DE INICIO (PRINCIPIO)*/
                            (event.event_initDate === null) ?
                                <InputComponent name="event_initDate"
                                    handleChange={this.props.funcion}
                                    type='date'
                                    label="Sesion de apertura 1"
                                    readOnly={readonly}
                                />
                                :
                                <InputComponent name="event_initDate"
                                    handleChange={this.props.funcion}
                                    type='date'
                                    label="Fecha de inicio"
                                    readOnly={readonly}
                                    value={event.event_initDate.split('T')[0]} />
                        }

                        {/*FECHA DE FIN (PRINCIPIO)*/
                            (event.event_endDate === null) ?
                                <InputComponent name="event_endDate"
                                    handleChange={this.props.funcion}
                                    type='date'
                                    label="Sesion de apertura 1"
                                    readOnly={readonly}
                                />
                                :
                                <InputComponent name="event_endDate"
                                    handleChange={this.props.funcion}
                                    type='date'
                                    label="Fecha de inicio"
                                    readOnly={readonly}
                                    value={event.event_endDate.split('T')[0]} />
                        }




                    </form>
                </div>
            </section>


        )
    }
}
FormularioEvents.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}