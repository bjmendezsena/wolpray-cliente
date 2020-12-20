
import FormularioDresscode from './FormularioDresscode';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoDresscode from './ListadoDresscode';




export default class  ControllerDresscode extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA ='n_dresscode';
        this.ID ='dressCodeId';
        this.LISTADO = ListadoDresscode
        this.FORMULARIO = FormularioDresscode
        this.MODELO = {
            dressCodeId:0,
            dressCodeName:"",
            dressCodeDescription:""
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }

    
}