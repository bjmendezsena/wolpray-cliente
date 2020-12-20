import React from 'react'
import Desplegable from './desplegable'
import PropTypes from 'prop-types'

export const DesplegableDireccion = ({ funcion = 0, valorCCAA = 0, valorProv = 0, valorPobl = 0, dependCountry = '209' }) => {

    return (
        <>
            <Desplegable label="Comunidad autonoma"
                readValue={funcion}
                table='c_state'
                value={valorCCAA}
                depend={dependCountry}
                name="stateid" />
            <Desplegable label="Provincia"
                readValue={funcion}
                table='c_provinces'
                value={valorProv}
                depend={valorCCAA}
                name="provinceid" />

            <Desplegable label="Poblacion"
                readValue={funcion}
                table='c_city'
                value={valorPobl}
                depend={valorProv}
                name="cityid" />
        </>
    )
}

DesplegableDireccion.propTypes = {
    funcion: PropTypes.func.isRequired,
    valorCCAA: PropTypes.number,
    valorProv: PropTypes.number,
    valorPobl: PropTypes.number,
}
