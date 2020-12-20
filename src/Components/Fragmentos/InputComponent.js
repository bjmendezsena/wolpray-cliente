import React from 'react';
import PropTypes from 'prop-types';
import { InputElement } from './InputElement';


/**
 * Genera un input para un formulario.
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
 * @param {*} claseDiv     clase para div de recubrimiento
 */
export const InputComponent = ({
    clase = 'input-text',
    tam = '', step = '',
    type = 'text', value = '',
    name = '', label = '',
    handleChange,
    readOnly = true,
    claseDiv = "col-lg-6" }) => {


    const onFocus = event => {

        if (event.target.autocomplete) {
            event.target.autocomplete = "whatever";
        }

    };

    if (value === null || value === undefined) {
        value = '';
    }

    if (type === 'textarea') {
        return (
            <div className={"form-field " + claseDiv}>
                <label className="label" htmlFor={name}><h5>{label}:</h5></label>

                {
                    (!readOnly) ?
                        <textarea name={name}
                            step={step}
                            style={{ width: { tam }, height: 70, resize: 'none' }}
                            autoComplete="off"
                            className={clase}
                            onChange={handleChange}
                            placeholder={'Ingresa el ' + name}
                            value={value}
                        />
                        :
                        <textarea
                            name={name}
                            step={step}
                            style={{ width: { tam }, height: 70, resize: 'none' }}
                            autoComplete="off"
                            className="form-control"
                            readOnly
                            onFocus={onFocus}
                            value={value}
                        />
                           
                       
                }
            </div>
        )

    } else {
        return (
            <div className="form-field col-lg-6">
                <label className="label" htmlFor={name}><h5>{label}:</h5></label>
                <InputElement
                    name={name}
                    tam={tam}
                    step={step}
                    type={type}
                    value={value}
                    clase={clase}
                    handleChange={handleChange}
                    readOnly={readOnly}
                />
            </div>
        )
    }
}

InputComponent.propTypes = {
    handleChange: PropTypes.func.isRequired
}
