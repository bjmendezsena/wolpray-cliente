import React, { Component } from 'react';




export default class Home extends Component {

    render() {

        return (
            <div className="container homepage animate__animated animate__fadeIn" >
                <div className="container">
                    <h3>MENÚ</h3>
                </div>

                <div className="row">
                    <div className="col-4 containermenu">
                        <div > <h3>MENÚ</h3></div>
                        <div> <div>Dresscode</div> </div>
                        <div > <div>Empresas</div> </div>


                    </div>
                    <div className="col-8 containermenu">
                        <div > <h3>CONTENIDO</h3></div>


                    </div>

                </div>

            </div>

        )
    }
}