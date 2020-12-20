import React, { Component } from "react";
import PropTypes from "prop-types";
import { LPPAGINA, API_URL } from "../Components/Constantes";
import AccesoAPI from './AccesoAPI';

export default class Paginacion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            limit: 10,
            totalPaginas: 0,
            lppagina: LPPAGINA,
            active: 0
        };
    }

    componentDidMount() {
        this.leerContador()
    }
    pagingHandler = (event) => {
        let offset = parseInt(event.target.id);
        this.setState({
            active: offset
        });
        this.preparaPag(event.target.id - 1);
        //this.props.pageHandler(event.target.id - 1);
    };

    nextHandler = () => {
        let active = this.state.active;
        if (active <= this.state.totalPaginas) {
            this.setState({
                active: active + 1
            });
            //this.props.pageHandler(active + 1);
            this.preparaPag(active + 1);
        }
    };

    backHandler = () => {
        let active = this.state.active;
        if (active > 0) {
            this.setState({
                active: active - 1
            });
            //this.props.pageHandler(active - 1);
            this.preparaPag(active - 1);
        }
    };

    preparaPag = (offset) => {
        let salida = "?size=";
        if (offset > 0) salida += (this.state.lppagina * offset) + ","
        salida += this.state.lppagina
        this.props.pageHandler(salida);
    }



    leerContador() {
        AccesoAPI.accederApi(API_URL + this.props.tabla + '/count')
            .then(response => {
                if (response.Ok) {
                    //console.log('Desde paginacion: ', response)
                    let contador = response.Datos.contador;
                    let paginas = contador / this.state.lppagina;
                    if (paginas !== Math.floor(paginas)) paginas++
                    //console.log("mates", paginas, Math.floor(paginas))
                    this.setState({ totalPaginas: Math.floor(paginas), });
                }
                else {
                    this.setState({ error: response.Datos });
                }

            })
    }
    buildComponent = () => {
        const { totalPaginas } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= totalPaginas; i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="pull-right">
                {this.renderPageNumbers(pageNumbers, totalPaginas)}
            </div>
        );
    };

    renderPageNumbers = (pageNumbers, totalPaginas) => {
        let { active } = this.state;
        return (
            <nav className="animate__animated animate__flipInX">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button style={{ cursor: 'pointer' }}
                            className="page-link pu-2 px-3"
                            onClick={this.backHandler}
                        >
                            Anterior
                            </button>
                    </li>
                    {pageNumbers.map(number => {
                        if (
                            number >= parseInt(active) - 5 &&
                            number <= parseInt(active) + 5
                        ) {
                            return (
                                <li
                                    className="page-item"
                                    key={number}
                                    
                                >
                                    <button onClick={this.pagingHandler}
                                        style={{ cursor: 'pointer' }}
                                        className="page-link pu-2 px-3"
                                        id={number}
                                    >
                                        {number}
                                    </button>
                                </li>

                            );
                        } else {
                            return null;
                        }
                    })
                    }
                    <li className="page-item">
                        <button style={{ cursor: 'pointer' }}
                            className="page-link pu-2 px-3"
                            onClick={this.nextHandler}
                        >
                            Siguiente
                         </button>
                    </li>
                </ul>
            </nav>
        )

            ;
    };


    render() {
        return this.buildComponent();
    }

}
Paginacion.propTypes =
{
    tabla: PropTypes.string,
    pageHandler: PropTypes.func

};