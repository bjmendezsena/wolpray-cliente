
class Slot {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(slotid , clubid , opening_time,closing_time,day,maxPeople,listaVip){
         this.slotid = slotid;
         this.clubid = clubid;
         this.opening_time = opening_time;
         this.closing_time = closing_time;
         this.day = day;
         this.maxPeople = maxPeople;
         this.listaVip = listaVip;
     }

}
export default Slot;