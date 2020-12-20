import React, { Component } from 'react'


import AccesoAPI from '../../Servicios/AccesoAPI';
import { METODO } from '../Constantes';
import { Alerts } from '../Fragmentos/Alerts';
import CtrlFormulario from './../../Servicios/CtrlFormulario';


export default class ControllerBase extends Component {


    insertSolicitado = () => {
        this.setState({
            estadoActualizacion: 1,       //pongo modo formulario
            orden: "I",               //pongo lo que ha de hacer
            id: null,                      //pongo sobre quien lo ha de hacer
            objeto: Object.assign({}, this.MODELO)
        });
    }

    trabajoSolicitado = (orden, id) => {
        //console.log("Controller, orden y id=>",orden,id)
        AccesoAPI.leerUNO(this.TABLA, id)
            .then(response => {
                //console.log("RespuestaUNO=>", response);
                    if (response.Ok) {
                        this.setState({
                            estadoActualizacion: 1,       //pongo modo formulario
                            orden: orden,               //pongo lo que ha de hacer
                            id: id,                      //pongo sobre quien lo ha de hacer
                            objeto: response.Datos[0]
                        });
                    } else {
                        this.setState({
                            err: true,
                            msjerr: response.Datos
                        })
                    }
            })
    }


    accionSolicitada = async (datos,orden=null) => {
        if (!orden) {
            orden = this.state.orden;
        }
        if (orden === "D") {
            await Alerts.questionMessage('¿Estás seguro de realizar esta operación?', '¡Atención!')
                .then(res => {
                    if (res) {

                        this.setState({ estadoActualizacion: 2 })
                       
                        let datosEnvio = this.montaDatos(datos);
                        AccesoAPI.enviarTodo(this.TABLA, METODO[orden], datosEnvio, datos[this.ID])
                            .then(response => {
                                this.setState({ estadoActualizacion: 0 });
                            }).catch(err => {
                                console.log(err);
                                Alerts.errorMessage('Ha ocurrido un error inesperado')
                            });
                    }
                });

        } else {
            this.setState({ estadoActualizacion: 0 });
            this.setState({ estadoActualizacion: 2 });
                        let datosEnvio = this.montaDatos(datos);
                        AccesoAPI.enviarTodo(this.TABLA, METODO[orden], datosEnvio, datos[this.ID])
                            .then(response => {
                                if(this.campoFoto){
                                    AccesoAPI.enviarImagen(this.url, datos[this.campoFoto], this.campoFoto)
                                                        .then(res => {
                                                            console.log(res);
                                                        }).catch(err => console.log('Error al subir imagen => ',err));
                                }
                                this.setState({ estadoActualizacion: 0 });
                            }).catch(err => {
                                console.log(err);
                                Alerts.errorMessage('Ha ocurrido un error inesperado')
                            });
        }
    }
    montaDatos(datos) {
        let salida = {}

        for (let key in this.MODELO) {
            if (!(key === this.ID && datos[key] === null)) {
                
                salida[key] = datos[key];
            }
        }
        return salida;
    }

    getPropertyValue(obj1, dataToRetrieve) {
        return dataToRetrieve
            .split('.') // split string based on `.`
            .reduce(function (o, k) {
                return o && o[k]; // get inner property if `o` is defined else get `o` and return
            }, obj1) // set initial value as object
    }

    render() {
        
        const LISTADO = this.LISTADO;
        const FORMULARIO = this.FORMULARIO;
      
        //
        // se debe sacar mensaje de error, si esta en state
        //
        return (
            <div className="container">
                {(this.state.estadoActualizacion === 0) ?
                    <LISTADO usuario={this.state.usuario}
                        trabajo={this.trabajoSolicitado}
                        insertar={this.insertSolicitado} />
                    : ""}
                {(this.state.estadoActualizacion === 1) ?
                    <CtrlFormulario orden={this.state.orden}
                        obj={this.state.objeto}
                        trabajo={this.accionSolicitada}
                        formulario={<FORMULARIO />}
                    />
                    : ""}

                {(this.state.estadoActualizacion === 2) ?
                    <h1>En proceso</h1> : ""}
            </div>
        )

    }
}