
import ListadoCountry from './ListadoPais';

import Formulario from './FormularioPais';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';


export default class ControllerPais extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'c_country';
        this.ID = 'countryId';
        this.LISTADO = ListadoCountry;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            countryId:0,
            countryName:"",
            country_limit_por:0,
            country_limit_mess:""
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    

    
}