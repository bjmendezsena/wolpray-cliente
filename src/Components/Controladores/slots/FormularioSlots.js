import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';

export default class FormularioSlots extends Component {
    render() {
        let slot = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false
        
        let vip = false;
        if(slot.listaVip===1){
            vip = true;
        }else{
            vip = false;
        }
        
        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Slot</h1>
                <label htmlFor="slotid "></label>
                <div className="container">
                    <form className="formulario row">
                        {
                            (slot.slotid  ) ?
                                <InputComponent name="slotid"
                                    handleChange={this.props.funcion}
                                    label="Slot ID"
                                    readOnly={true}
                                    value={slot.slotid} /> : null
                        }
                        <InputComponent name="slotid"
                                    handleChange={this.props.funcion}
                                    label="Club id"
                                    readOnly={true}
                                    value={slot.clubid} />
                        <InputComponent name="day"
                                        handleChange={this.props.funcion}
                                        type='date'
                                        label="Dia"
                                        readOnly={readonly}
                                        value={slot.day.split('T')[0]}
                                    />
                        <InputComponent name="hora"
                                    handleChange={this.props.funcion}
                                    label="Hora de apertura"
                                    readOnly={readonly}
                                    value={slot.opening_time} />
                        <InputComponent name="hora"
                                    handleChange={this.props.funcion}
                                    label="Hora de cierre"
                                    readOnly={readonly}
                                    value={slot.closing_time} />
                        <InputComponent name="hora"
                                    handleChange={this.props.funcion}
                                    type='number'
                                    label="Máximo de personas"
                                    readOnly={readonly}
                                    value={slot.maxPeople} />

                                   
                                    <label>VIP </label>
                        {
                            /**HAY QUE ARREGLAR BIEN EL CPMPONENTE DE VIP */
                            (vip)?
                            
                            <input name ='listaVip'
                            type='checkbox'
                            checked
                            value={vip}
                            disabled={readonly}
                            >
                            
                            </input>
                            :
                            <input name ='listaVip'
                            type='checkbox'
                            value={vip}
                            disabled={readonly}
                            >
                            
                            </input>
                           /* <InputComponent name="listaVip"
                                    handleChange={this.props.funcion}
                                    type='checkbox'
                                    label="VIP"
                                    readOnly={readonly}
                                    checked />:
                                <InputComponent name="hora"
                                    handleChange={this.props.funcion}
                                    type='checkbox'
                                    label="VIP"
                                    readOnly={readonly}
                                    />*/

                        }
                        
                        
                    </form>
                </div>
            </section>


        )
    }
}

FormularioSlots.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}