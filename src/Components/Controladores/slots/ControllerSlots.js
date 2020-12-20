
import ListadoSlots from './ListadoSlots';

import FormularioSlots from './FormularioSlots';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';


export default class ControllerSlots extends ControllerBase {


    constructor(props) {
        super(props);
        this.TABLA = 'slots';
        this.ID = 'slotid';
        this.LISTADO = ListadoSlots
        this.FORMULARIO = FormularioSlots
        this.MODELO ={
            slotid:0,
            clubid:0,
            opening_time:"",
            closing_time:"",
            day:"",
            maxPeople:0,
            listaVip:0
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}