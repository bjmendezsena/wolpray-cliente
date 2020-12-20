import Formulario from './FormularioProvince';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoProvince from './ListadoProvince';
import Provincia from '../../../modelos/Provincia';


export default class ControllerProvince extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'c_provinces';
        this.ID = 'provinceid';
        this.LISTADO = ListadoProvince;
        this.FORMULARIO = Formulario;
        this.MODELO = new Provincia();
       
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }
    
}