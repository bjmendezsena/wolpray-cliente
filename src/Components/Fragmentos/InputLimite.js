import React from 'react';
import PropTypes from 'prop-types';

import { InputComponent } from './InputComponent';


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
 */
export const InputLimite = ({ clase = 'input-text',
    tam = '250', step = '',
    type = 'text',
    obj = '',
    name = '',
    label = '',
    handleChange,
    readOnly = true,
    esClub = false }
) => {
    let nameForClub = "";
    let nameForOthers = "";
    if (esClub) {
        nameForClub=name + "_limit";
    } else {
        nameForClub = name + "_limitClubs";
        nameForOthers = name + "_limitOthers"
    }
    return (
        <>
            <fieldset className="border p-2" style={{ display: "ruby" }}>
                <legend className="w-auto">Limites para Clubs</legend>
                <InputComponent
                    handleChange={handleChange}
                    name={nameForClub + "_porInt"}
                    label="% limite aforo interno"
                    readOnly={readOnly}
                    value={obj[nameForClub + '_porInt']}
                />
                <InputComponent
                    handleChange={handleChange}
                    name={nameForClub + "_porExt"}
                    label="% limite aforo terraza"
                    readOnly={readOnly}
                    value={obj[nameForClub + '_porExt']}
                />
                <InputComponent
                    type="textarea"
                    tan='100%'
                    claseDiv="col-lg-12"
                    handleChange={handleChange}
                    name={nameForClub + "_mess"}
                    label="Texto limitacion"
                    readOnly={readOnly}
                    value={obj[nameForClub + '_mess']}
                />
            </fieldset>
            {
                (!esClub) ?
                    <fieldset className="border p-2" style={{ display: "ruby" }}>
                        <legend className="w-auto">Limites para Bares y restaurantes</legend>
                        <InputComponent
                            handleChange={handleChange}
                            name={nameForOthers + "_porInt"}
                            label="% limite aforo interno"
                            readOnly={readOnly}
                            value={obj[nameForOthers + '_porInt']}
                        />
                        <InputComponent
                            handleChange={handleChange}
                            name={nameForOthers + "_porExt"}
                            label="% limite aforo terraza"
                            readOnly={readOnly}
                            value={obj[nameForOthers + '_porExt']}
                        />
                        <InputComponent
                            type="textarea"
                            tan='100%'
                            claseDiv="col-lg-12"
                            handleChange={handleChange}
                            name={nameForOthers + "_mess"}
                            label="Texto limitacion"
                            readOnly={readOnly}
                            value={obj[nameForOthers + '_mess']}
                        />
                    </fieldset>
                :
                <div></div>
            }
        </>

    )


}