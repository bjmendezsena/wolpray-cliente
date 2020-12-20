
import Listado from './ListadoMusic';

import Formulario from './FormularioMusic';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import Nmusic from './../../../modelos/Nmusic';


export default class ControllerMusic extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'n_music';
        this.ID = 'musicid';
        this.LISTADO = Listado
        this.FORMULARIO = Formulario
        this.MODELO = new Nmusic();
        
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
       
    }

    

    
}