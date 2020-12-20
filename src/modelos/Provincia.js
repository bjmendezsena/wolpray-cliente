
class Provincia {

    // provinceid;
    //provinceName;
    //stateid;
    //provinceCapital;

    constructor(provinceid = 0,
        provinceName = "",
        stateid = 0, provinceCapital = "",
        province_limitClubs_porInt = 0,
        province_limitClubs_porExt = 0,
        province_limitClubs_mess = "",
        province_limitOthers_porInt = 0,
        province_limitOthers_porExt = 0,
        province_limitOthers_mess = ""
    ) {
        this.provinceid = provinceid;
        this.provinceName = provinceName;
        this.provinceCapital = provinceCapital;
        this.stateid = stateid;
        this.province_limitClubs_porInt = province_limitClubs_porInt;
        this.province_limitClubs_porExt = province_limitClubs_porExt;
        this.province_limitClubs_mess = province_limitClubs_mess;
        this.province_limitOthers_porInt = province_limitOthers_porInt;
        this.province_limitOthers_porExt = province_limitOthers_porExt;
        this.province_limitOthers_mess = province_limitOthers_mess;
    }
}
export default Provincia;