'use strict'
class Pais {
    //  countryId
    //  countryName;


    constructor(countryId, countryName,
        country_limitClubs_porInt, country_limitClubs_porExt, country_limitClubs_mess,
        country_limitOthers_porInt, country_limitOthers_porExt, country_limitOthers_mess) {
        this.countryId = countryId;
        this.short_name = countryName;
        this.country_limitClubs_porInt = country_limitClubs_porInt;
        this.country_limitClubs_porExt = country_limitClubs_porExt;
        this.country_limitClubs_mess = country_limitClubs_mess;
        this.country_limitOthers_porInt = country_limitOthers_porInt;
        this.country_limitOthers_porExt = country_limitOthers_porExt;
        this.country_limitOthers_mess = country_limitOthers_mess;
    }

}
export default Pais;