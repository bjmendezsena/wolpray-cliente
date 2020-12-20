import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';

export default class FormularioMusic extends Component {
    render() {
        let music = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false

        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                <h1 className="title">Música</h1>
                <div className="container">
                    <form className="formulario row">
                        {
                            (music.musicid) ?
                                <InputComponent name="musicid"
                                    handleChange={this.props.funcion}

                                    label="ID"
                                    readOnly={true}
                                    value={music.musicid} /> : null
                        }
                        <InputComponent name="musicName"
                            handleChange={this.props.funcion}
                            label="Nombre"
                            readOnly={readonly}
                            value={music.musicName}
                        />
                        <InputComponent
                            type='textarea'
                            name="musicDescription"
                            handleChange={this.props.funcion}
                            label="Descripción"
                            readOnly={readonly}
                            value={music.musicDescription}
                        />
                    </form>

                </div>
            </section>


        )
    }
}
FormularioMusic.defaultProps = {
    orden: "V"

}
FormularioMusic.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']),
    obj: PropTypes.object,
    funcion: PropTypes.func
}