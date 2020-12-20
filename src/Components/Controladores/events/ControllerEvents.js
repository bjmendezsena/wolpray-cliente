
import FormularioEvents from './FormularioEvents';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoEvents from './ListadoEvents';

export default class ControllerEvents  extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'events';
        this.ID = 'eventid';
        this.LISTADO = ListadoEvents
        this.FORMULARIO = FormularioEvents
        this.MODELO = {
            eventid:0,
            clubid:0,
            eventName:"",
            eventDescription:"",
            event_initDate:"",
            event_endDate:"",
            event_minimunAge:0,
            event_imagePral:"",

        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
       
    }
    
}

