
class Events {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(eventid  , clubid  , eventName ,eventDescription,event_initDate,event_endDate,event_minimunAge ,event_imagePral){
         this.eventid = eventid;
         this.clubid = clubid;
         this.eventName = eventName;
         this.eventDescription = eventDescription;
         this.event_initDate = event_initDate;
         this.event_endDate = event_endDate;
         this.event_minimunAge = event_minimunAge;
         this.event_imagePral = event_imagePral;
     }

}
export default Events;