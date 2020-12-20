
class Comunidades {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;
    // state_limit_por;
    // state_limit_mess


    constructor(stateid=0, stateName="", countryid=0,
        state_limitClubs_porInt=0, state_limitClubs_porExt=0, state_limitClubs_mess="",
        state_limitOthers_porInt=0, state_limitOthers_porExt=0, state_limitOthers_mess=0) {
        this.stateid = stateid;
        this.stateName = stateName;
        this.countryid = countryid;
        this.state_limitClubs_porInt = state_limitClubs_porInt;
        this.state_limitClubs_porExt = state_limitClubs_porExt;
        this.state_limitClubs_mess = state_limitClubs_mess;
        this.state_limitOthers_porInt = state_limitOthers_porInt;
        this.state_limitOthers_porExt = state_limitOthers_porExt;
        this.state_limitOthers_mess = state_limitOthers_mess;
    }

}
export default Comunidades;