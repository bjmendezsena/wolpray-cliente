import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BotonListado from './BotonListados'
import { VIE, MOD, DEL, COLORES } from '../Constantes';


export default class TresBotonesListado extends Component {


    render() {
        let funcion = this.props.funcion;
        return (
            <>
                <td>
                    <BotonListado funcion={funcion}
                        clase={COLORES.BTN_VER}
                        tipo="V"
                        icon={VIE}
                        id={this.props.id}>
                    </BotonListado>
                </td><td>
                    <BotonListado funcion={funcion}
                        clase={COLORES.BTN_EDIT}
                        tipo="E"
                        icon={MOD}
                        id={this.props.id}>
                    </BotonListado>
                </td><td>
                    <BotonListado funcion={funcion}
                        clase={COLORES.BTN_DEL}
                        icon={DEL}
                        tipo="D"
                        id={this.props.id}>
                    </BotonListado>
                </td>

            </>
        )
    }
}
TresBotonesListado.propTypes = {
    funcion: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}