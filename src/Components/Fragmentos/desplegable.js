import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccesoAPI from './../../Servicios/AccesoAPI';


export default class Desplegable extends Component {
    static defaultProps = {
        value: ''
    }
    state = {
        datos: [],
        error: "",
        id: 0
    }

    componentDidUpdate() {
        this.monta();
    }
    componentDidMount() {
        this.monta();
    }
    monta() {
        
        if (this.props.depend === this.state.id && this.props.depend !== "") {
            return
        }
        if (this.props.depend === "" && this.state.dato !== "") {
            return
        }
        this.setState({ id: this.props.depend });

        AccesoAPI.leerDesplegables(this.props.table, this.props.depend)
            .then(response => {
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Message });
                }

            })

    }




    render() {

        let items = [];
        items.push(<option key="0" value= "0">Selecciona....</option>);
        if (this.state.datos.length > 0) {
            this.state.datos.forEach((valor, index) => {
                items.push(<option key={index + 1} value={valor.id}>{valor.opcion}</option>);
            });
        }

        let nombreCampo = this.props.name;
        return (

            <div className="form-field col-lg-6">
                <label htmlFor={nombreCampo}
                    className="label"
                >
                    {<h4>{`${this.props.label}:`}</h4>}
                </label>
                <select name={nombreCampo}
                    id={nombreCampo}
                    className="form-control"
                    onChange={this.props.readValue}
                    value={this.props.value}
                >
                    {items}
                </select>
            </div>
        )

    }
}

Desplegable.propTypes = {
    readValue: PropTypes.func,
    label: PropTypes.string,
    table: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}