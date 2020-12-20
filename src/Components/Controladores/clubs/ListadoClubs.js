import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, CLUBS } from '../../Constantes';
import AccesoAPI from './../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';

import Paginacion from './../../../Servicios/Paginacion';
import GestorListado from './../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';
import { INS } from '../../Constantes';


export default class ListadoClubs extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: ""
        }

        this.leeTabla = this.leeTabla.bind(this);
        this.gl = new GestorListado(API_URL + CLUBS, this.leeTabla);
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

            })
    }

    componentDidMount() {
        this.leeTabla();
    }




    render() {


        let item = [];


        this.state.datos.forEach((valor, index) => item.push(
            <tr key={index}>
                <td key={index} >{valor.clubid}</td>
                <td>{valor.clubName}</td>
                <td>{valor.clubPhone}</td>
                <td>{valor.streetName}, {valor.streetNumber}</td>
                <td>{valor.cityid}</td>
                <td>{valor.companyid}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.clubid} />
            </tr>

        ))


        return (

            <div className="container-fluid animate__animated animate__fadeIn">
                <div className="row mb-5">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row">
                            <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                                <h1>Listado Clubs</h1>
                              
                                <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}></BotonListado>

                            </div>

                            <table className="table table-striped bg-light table-hover">
                                <thead>
                                    <tr className="text-mmuted">
                                        <MontaCabecera separador='th'
                                            funcion={this.gl.setSortedField}
                                            lista={[
                                                ['clubid', 'Identificador'],
                                                ['clubName', 'name'],
                                                ['clubPhone', 'Phone'],
                                                ['streetName', 'Dirección'],
                                                ['cityid', 'ID Ciudad'],
                                                ['companyid', 'ID Empresa'],
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
                                tabla={CLUBS}>
                            </Paginacion>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
ListadoClubs.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func
}