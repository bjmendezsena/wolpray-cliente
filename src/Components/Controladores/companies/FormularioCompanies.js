import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DesplegableDireccion } from '../../Fragmentos/DesplegableDireccion';
import { InputComponent } from '../../Fragmentos/InputComponent';




export default class FormularioCompanies extends Component {

    render() {
        let company = this.props.obj;
        let readonly = ['D', 'V'].includes(this.props.orden) ? true : false;
        let title = '';
        switch (this.props.orden) {
            case 'I':
                title = 'añadir';
                break;
            case 'E':
                title = 'modificar';
                break;
            default:
                title = 'Información sobre empresa';
                break;
        }

        
        return (
            <section className="get_in_touch animate__animated animate__fadeIn">
                {
                    (!readonly) ?
                        (<h1 className="title">{'Formulario para ' + title}</h1>) :
                        (<h1 className="title">{title}</h1>)
                }
                <div className="container">
                            <br />
                            <div className="container">
                                <form className="formulario row">
                                    {
                                        (company.companyid) ?
                                            (<><InputComponent
                                                handleChange={this.props.funcion}
                                                name="companyid"
                                                label="ID"
                                                readOnly={true}
                                                value={company.companyid.toString()}
                                            /></>) : null
                                    }

                                    <InputComponent
                                        handleChange={this.props.funcion}
                                        name="companyName"
                                        label="Nombre"
                                        readOnly={readonly}
                                        value={company.companyName}
                                    />

                                    <InputComponent
                                        handleChange={this.props.funcion}
                                        name="companyAddress"
                                        label="Dirección"
                                        readOnly={readonly}
                                        value={company.companyAddress}
                                    />
                                    <InputComponent
                                        handleChange={this.props.funcion}
                                        name="company_CIF"
                                        label="CIF"
                                        readOnly={readonly}
                                        value={company.company_CIF}
                                    />


                                    {
                                        (readonly) ?
                                            (<InputComponent
                                                handleChange={this.props.funcion}
                                                name="city"
                                                label="Ciudad"
                                                readOnly={readonly}
                                                value={company.cityName}
                                            />) :
                                            (<>
                                                <DesplegableDireccion
                                                    funcion={this.props.funcion}
                                                    valorCCAA={company.stateid}
                                                    valorProv={company.provinceid}
                                                    valorPobl={company.cityid}
                                                />
                                            </>)
                                    }
                                </form>
                            </div>
                </div>
            </section>
        )
    }
}




FormularioCompanies.defaultProps = {
    orden: "V"
}

FormularioCompanies.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func
}