
import ListadoUsers from './ListadoUsers';

import FormularioUsers from './FormularioUsers';
import ControllerBase from '../ControllerBase';
import { checkUsuario } from '../../../Servicios/funcionesSeguridad';


export default class ControllerUsers extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'users';
        this.ID = 'userid';
        this.LISTADO = ListadoUsers
        this.FORMULARIO = FormularioUsers
        this.MODELO ={
            userid: "",
            userName: "",
            mail: "",
            password: 0,
            userPhone: "",
            birthdate: "",
            roleid: "",
            companyid: "",
           }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}