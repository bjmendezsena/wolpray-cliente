import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';





export default class FormularioDresscode extends Component {
    render() {
        let dresscode = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Código de vestimenta</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (dresscode.dressCodeId) ?
                                <InputComponent name="dressCodeId"
                                    handleChange={this.props.funcion}
                                    label="ID"
                                    readOnly={true}
                                    value={dresscode.dressCodeId} /> : null
                        }


                        <InputComponent name="dressCodeName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={dresscode.dressCodeName}
                        />
                        <InputComponent
                            type='textarea'
                            name="dressCodeDescription"
                            handleChange={this.props.funcion}
                            label="Descripcion"
                            readOnly={readonly}
                            value={dresscode.dressCodeDescription}
                        />
                    </form>
                </div>
            </section>


        )
    }
}
FormularioDresscode.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}