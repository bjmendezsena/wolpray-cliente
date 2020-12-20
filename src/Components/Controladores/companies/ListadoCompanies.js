import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { API_URL, COMPANIES } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import { INS } from '../../Constantes';

export default class ListadoCompanies extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }
        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + COMPANIES, this.leeTabla);
    }
    leeTabla() {
        AccesoAPI.accederApi(this.gl.terminaURLlistado())
            .then(response => {
                if (response.Ok) {
                    this.setState({ datos: response.Datos })
                }
                else {
                    this.setState({ error: response.Datos });
                }

            }).catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.leeTabla();
    }





    render() {

        let item = [];

        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.companyid}</td>
                <td>{valor.companyName}</td>
                <td>{valor.companyAddress}</td>
                <td>{valor.cityid}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.companyid} />
            </tr>

        ))


        return (

            <div className="container-fluid animate__animated animate__fadeIn">
                <div className="row mb-5">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row">
                            <div className="col-12 cabecera_controlador animate__animated animate__slideInUp">

                                <h1>Listado de mpresas</h1>
                                <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}></BotonListado>
                            </div>
                            <table className="table table-striped bg-light table-hover">
                                <thead>
                                    <tr className="text-mmuted">
                                    <MontaCabecera separador='th'
                                    funcion={this.gl.setSortedField}
                                    lista={[
                                        ['companyid', 'Identificador'],
                                        ['companyName', 'Nombre'],
                                        ['companyAddress', 'Direccion'],
                                        ['cityid', 'Id Ciudad']
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
                                tabla={COMPANIES}>
                            </Paginacion>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
ListadoCompanies.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}