import Formulario from './FormularioCompanies';
import ControllerBase from './../ControllerBase';
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';
import ListadoCompanies from './ListadoCompanies';




export default class ControllerCompanies extends ControllerBase {
    constructor(props) {
        super(props);
        this.TABLA = 'companies';
        this.ID = 'companyid';
        this.LISTADO = ListadoCompanies;
        this.FORMULARIO = Formulario;
        this.MODELO = {
            companyid: 0,
            companyName: "",
            companyAddress: "",
            cityid: 0,
            cityName: "",
            company_CIF: "",
            provinceid: 0,
            provinceName: "",
            stateid: 0,
            stateName: "",
            countryId: 0,
            countryName: "",
        }
        this.state = {
            estadoActualizacion: 0,
            orden: "",
            id: 0,
            estadoUsuario: checkUsuario(9)
        }
    }


}