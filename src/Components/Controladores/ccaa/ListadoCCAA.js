import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { API_URL, STATES } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import { INS } from '../../Constantes';

export default class ListadoCCAA extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }

        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + STATES, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                console.log(response);
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Respuesta });
                }

            })
    }

    componentDidMount() {
        this.leeTabla();
    }





    render() {

        let item = [];

        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td>{valor.stateid}</td>
                <td>{valor.stateName}</td>
                <td>{valor.countryName}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.stateid} />
            </tr>

        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='cabecera_controlador  animate__animated animate__slideInUp'>
                    <h1>Listado de estados</h1>
                    <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}></BotonListado>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['stateid', 'Identificador'],
                                    ['stateName', 'name']
                                ]} />
                            <th></th><th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {item}
                    </tbody>

                </table>
                <Paginacion
                    pageHandler={this.gl.pageHandler}
                    tabla={STATES}>
                </Paginacion>
            </div>
        )
    }

}
ListadoCCAA.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}