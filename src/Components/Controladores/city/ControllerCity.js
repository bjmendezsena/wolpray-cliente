import Formulario from './FormularioCity';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCity from './ListadoCity';
import Poblacion from '../../../modelos/Poblacion';

export default class ControllerCity extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'c_city';
        this.ID = 'cityid';
        this.LISTADO = ListadoCity;
        this.FORMULARIO = Formulario;
        this.MODELO = new Poblacion();
       
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }
}
 