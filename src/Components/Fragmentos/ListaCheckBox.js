import React, { Component } from 'react'
import PropTypes from "prop-types";
import AccesoAPI from '../../Servicios/AccesoAPI';
import Checkbox from './Checkbox';

/**
 * Presenta una lista de checkbox del fichero indicado por 
 * table : nombre de la tabla de donde sale la lista
 * readValue: funcion que recibe el array con los ids activos
 * label:legend del fieldset  
 * name: Sin usar de momento,
 * activos:String con todos los elementos activos separados por ','
 */
//fieldset : utiliza la clase fieldSetCheckBox


export default class ListaCheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: []
        }
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        this.monta();
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        const estado = this.state.datos;
        let salida = [];
        estado.forEach(ele => {
            if (ele.op === item) {
                ele.isChecked = isChecked;
            }
            if (ele.isChecked) salida.push(ele.id)
        })
        this.setState({ datos: estado });
        this.props.readValue(salida);
    }


    monta() {
        let resp = [];
        let salida = [];
        AccesoAPI.leerDesplegables(this.props.table, 0)
            .then(response => {
                if (response.Ok) {
                    const activosAjustados = (this.props.activos.split(",").map(x => x.trim()).join(','));
                    response.Datos.forEach(obj => {
                        let isChecked = (activosAjustados + ",").indexOf(obj.opcion.trim() + ",") >= 0;
                        resp.push({
                            id: obj.id,
                            op: obj.opcion.trim(),
                            isChecked: isChecked
                        })
                        if (isChecked) salida.push(obj.id)

                    })
                    this.setState({ datos: resp });
                    this.props.readValue(salida);
                }
                else {
                    this.setState({ error: response.Respuesta });
                }

            })

    }

    montaCheckBox = (lista) => {
        return (
            <>
                {lista.map(ele => {

                    return (
                        <div className="checkbox" key={ele.id}>
                            <label className="label" >
                                <Checkbox name={ele.op}
                                    checked={ele.isChecked}
                                    onChange={this.handleChange} />
                                    &nbsp;
                                {ele.op + ':'}
                            </label>
                        </div>
                    )

                })}
            </>
        )
    }
    render() {

        // let nombreCampo = this.props.name;
        let contenido = this.state.datos;
        return (
            <fieldset className="fieldSetCheckBox">
                <legend>{this.props.label}</legend>
                {(contenido && contenido.length > 0) ?
                    this.montaCheckBox(contenido)
                    : ""
                }
            </fieldset>
        )
    }
}

ListaCheckBox.defaultProps = {
    table: 'n_music',
    name: 'pruebas',
    label: 'Tipos de musica',
    activos: ''
};

ListaCheckBox.propTypes = {
    readValue: PropTypes.func,
    label: PropTypes.string,
    table: PropTypes.string,
    name: PropTypes.string,
    activos: PropTypes.string

}