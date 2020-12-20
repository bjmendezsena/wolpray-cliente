import React, { Component } from 'react';
import './buttoncomponent.css';
/**
 * Este boton, veo que solo se utiliza para Login, otros botones estan en Fragmentos
 * ?Se ha cambiado de criterio a la hora de guardar componentes?
 */
class ButtonComponent extends Component {
    render() {
        const { text } = this.props;
        return <>

            <button className="logbtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </button>
        </>;
    }
}

export default ButtonComponent;