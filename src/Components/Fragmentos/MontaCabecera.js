import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BotonCabecera } from './BotonCabecera';

/**
 * lista:   array de arrays de parejas de nombres, para cada una de las columnas, 
 *          el primero el el nombre del campo en la tabla
 *          el segundo es el combre de la columna. 
 *          Si solo hay uno, se consideran iguales
 *          lista={[
 *                    ['musicid', 'Identificador'],
 *                    ['musicName', 'name']
 *                ]} />
 * separador:Forma como se separan los elementos. No esta funcionando
 *          Todos los elementos, de momento, se separan con "<th></th>"
 * 
 * funcion  : funcion que se encarga de controlar la clasificacion
 *            en la estructura actual, puede ser {this.gl.setSortedField}
 */

export default class MontaCabecera extends Component {

    render() {
        let funcion = this.props.funcion;
        let lista = this.props.lista;
        // let sep = this.props.separador;
        // let sepi = (sep !== "") ? '<' + sep + '>' : "";
        // let sepf = (sep !== "") ? '</' + sep + '>' : "";

        return (
            <>
                {lista.map((elemento, i) => {
                    return (
                        <th key={i}>
                            <BotonCabecera name={elemento[0]}
                                col={elemento[1]}
                                gestionClas={funcion}
                            />
                        </th>
                    )

                })}
            </>
        )
    }
}

MontaCabecera.defaultProps = {
    separador: 'th'
};



MontaCabecera.propTypes = {
    funcion: PropTypes.func,
    lista: PropTypes.array,
    separador: PropTypes.string
}