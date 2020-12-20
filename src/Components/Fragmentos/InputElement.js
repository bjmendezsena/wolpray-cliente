import React from 'react';
import PropTypes from 'prop-types';


/**
 * Genera un input basico
 * 
 * @param {*} clase     clase de estilo para el input 
 * @param {*} tam       tamaño del with para el input 
 * @param {*} step      step del input
 * @param {*} type      tipo de input
 * @param {*} value     valor por defecto del input
 * @param {*} name      nombre del campo del input
 * @param {*} label     texto del label
 * @param {*} handleChange     función onChange del input
 * @param {*} readOnly     determina si el input es solo para leer o no
 */
export const InputElement = ({ clase = 'input-text',
    tam = '250', step = '',
    type = 'text',
    value = '',
    name = '',
    label = '',
    handleChange,
    readOnly = true }) => {
    
        const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    return (
        (!readOnly) ?
            <input
                name={name}
                style={{ width: { tam } }}
                step={step}
                type={type}
                autoComplete="off"
                value={value}
                className={clase}
                onChange={handleChange}
                placeholder='valor'
            /> :
            <input
                name={name}
                style={{ width: { tam } }}
                step={step}
                type={type}
                autoComplete="off"
                value={value}
                className="form-control"
                readOnly

                onFocus={onFocus}
            />
    )
}
