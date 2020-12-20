import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { API_URL, SLOTS } from '../../Constantes';
import AccesoAPI from '../../../Servicios/AccesoAPI';
import TresBotonesListado from '../../Fragmentos/TresBotonesListado';
import BotonListado from '../../Fragmentos/BotonListados';
import { INS } from '../../Constantes';

import Paginacion from '../../../Servicios/Paginacion';
import GestorListado from '../../../Servicios/GestorListado';
import MontaCabecera from '../../Fragmentos/MontaCabecera';

export default class ListadoSlotsDetalle extends Component {


    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            error: "",
            clubid: 0,
            mes: 0
        }
        let clubymes = `/mes/${this.props.clubid}/2020/${this.props.mes}`
        this.gl = new GestorListado(API_URL + SLOTS + clubymes, this.leeTabla);

        this.leeTabla = this.leeTabla.bind(this);
    }
    leeTabla() {
        if (this.props.clubid === this.state.clubid &&
            this.props.mes === this.state.mes) {
            return;
        }
        this.setState({
            clubid: this.props.clubid,
            mes: this.props.mes
        });
        let clubymes = `/mes/${this.props.clubid}/2020/${this.props.mes}`
        this.gl = new GestorListado(API_URL + SLOTS + clubymes, this.leeTabla);

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
    componentDidUpdate(prevState, prevProps) {
        this.leeTabla();
    }





    render() {
        let item = [];


        this.state.datos.forEach((valor, index) => item.push(

            <tr key={index}>
                <td key={index} >{valor.slotid}</td>
                <td>{valor.day.split('T')[0]}</td>
                <td>{valor.opening_time}</td>
                <td>{valor.closing_time}</td>
                <td>{valor.maxPeople}</td>
                <td> {valor.listaVip===1?'Si':'No'}</td>
                <TresBotonesListado funcion={this.props.trabajo}
                    id={valor.slotid} />
            </tr>
        ))


        return (

            <div className="container animate__animated animate__fadeIn">
                <div className='col-12 cabecera_controlador animate__animated animate__slideInUp'>
                    <h1>Listado de horarios</h1>
                    <BotonListado icon={INS} funcion={this.props.insertar} clase="btn-success" tipo="I" id={0}></BotonListado>
                </div>
                <h3>{this.props.clubname}</h3>
                <h3>{this.props.nombremes}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <MontaCabecera separador='th'
                                funcion={this.gl.setSortedField}
                                lista={[
                                    ['slotI', 'Identificador'],
                                    ['day', 'Fecha'],
                                    ['opening_time', 'Hora de apertura'],
                                    ['closing_time', 'Hora de cierre'],
                                    ['maxPeople', 'Máximo de personas'],
                                    ['listaVip', 'Lista VIP']
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
                    tabla={SLOTS}>
                </Paginacion>
            </div>
        )
    }

}
ListadoSlotsDetalle.propTypes = {
    usuario: PropTypes.object,
    trabajo: PropTypes.func,
    mes: PropTypes.string,
    clubid: PropTypes.number,
    clubname: PropTypes.string,
    nombremes: PropTypes.string,
}