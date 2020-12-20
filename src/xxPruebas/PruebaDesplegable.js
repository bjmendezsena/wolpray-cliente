import React, { Component } from 'react'

import Desplegable from '../Components/Fragmentos/desplegable';



export default class PruebaDesplegable extends Component {

    state={
        ccaa:11,
        provincie:0,
        city:0
    }
    recogeEstado = (e) => {
        this.setState({ ccaa: Number(e.target.value) })
    }
    recogeProvincia = (e) => {
        this.setState({ provincie:Number(e.target.value) })
    }
    recogePoblacion = (e) => {
        this.setState({ city:Number(e.target.value) })
    }

    render() {
        console.log("render",this.state)
        return (
            <>
                <Desplegable label="Comunidad autonoma" readValue={this.recogeEstado} table='c_state' value={this.state.ccaa} depend={209} />
                <Desplegable label="Provincia" readValue={this.recogeProvincia} table='c_provinces' value={this.state.provincie} depend={this.state.ccaa} />
                <Desplegable label="Poblacion" readValue={this.recogePoblacion} table='c_city' value={this.state.city} depend={this.state.provincie} />
            </>
        )
    }
}