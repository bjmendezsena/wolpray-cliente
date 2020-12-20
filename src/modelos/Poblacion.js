
class Poblacion {

    // cityid
    // provinceid;
    //cityName;

    //latitude;
    //longitude;

    constructor(cityid=0, provinceid=0, cityName="",  
        latitude=0, longitude=0, 
        city_limitClubs_porInt=0,city_limitClubs_porExt=0,city_limitClubs_mess="",
        city_limitOthers_porInt=0, city_limitOthers_porExt=0, city_limitOthers_mess="") {
        this.cityid = cityid;
        this.provinceid = provinceid;
        this.cityName = cityName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city_limitClubs_porInt=city_limitClubs_porInt;
        this.city_limitClubs_porExt=city_limitClubs_porExt;
        this.city_limitClubs_mess=city_limitClubs_mess;
        this.city_limitOthers_porInt=city_limitOthers_porInt;
        this.city_limitOthers_porExt=city_limitOthers_porExt;
        this.city_limitOthers_mess=city_limitOthers_mess;
    }
}
export default Poblacion;