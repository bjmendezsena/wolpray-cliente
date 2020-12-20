
import { FormularioClub } from './FormularioClub';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoClubs from './ListadoClubs';
import Club from '../../../modelos/Club';




export default class ControllerClub extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'clubs';
        this.ID = 'clubid';
        this.LISTADO = ListadoClubs;
        this.campoFoto = 'coverUrl';
 //       this.urlPost = 'http://localhost:3800/api_v00/clubs/image/';
        this.FORMULARIO = FormularioClub
        let ele = new Club()
        ele.musicsUpdate='';           //aañado un campo mas que necesito enviar
        this.MODELO = ele;
        
        console.log(ele);
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: "",
            estadoUsuario: checkUsuario(9)
        }
    }


}