

class Club {

     constructor(
          clubid = 0,
          clubName = '',
          streetName = '',
          streetNumber = '',
          postal_code = '',
          cityid = 0,
          description = '',
          clubPhone = '',
          dressCodeid = 0,
          coverUrl = '',
          latitude = 0.0,
          longitude = 0.0,
          howToGetThere = '',
          entryCost = '',
          openSeason1 = '',
          closingSeason1 = '',
          openSeason2 = '',
          closingSeason2 = '',
          openSeason3 = '',
          closingSeason3 = '',
          accessAge = 0,
          DiasAnticipacion = 0,
          companyid = 0,
          maxPeopleInt = 0,
          maxPeopleExt = 0,
          club_limit_porInt = 0,
          club_limit_porExt = 0,
          club_limit_mess = ''
     ) {
          this.clubid = clubid;
          this.clubName = clubName;
          this.streetName = streetName;
          this.streetNumber = streetNumber;
          this.postal_code = postal_code;
          this.cityid = cityid;
          this.description = description;
          this.clubPhone = clubPhone;
          this.dressCodeid = dressCodeid;
          this.coverUrl = coverUrl;
          this.latitude = latitude;
          this.longitude = longitude;
          this.howToGetThere = howToGetThere;
          this.entryCost = entryCost;
          this.openSeason1 = openSeason1;
          this.closingSeason1 = closingSeason1;
          this.openSeason2 = openSeason2;
          this.closingSeason2 = closingSeason2;
          this.openSeason3 = openSeason3;
          this.closingSeason3 = closingSeason3;
          this.accessAge = accessAge;
          this.DiasAnticipacion = DiasAnticipacion;
          this.companyid = companyid;
          this.maxPeopleInt = maxPeopleInt;
          this.maxPeopleExt = maxPeopleExt;
          this.club_limit_porInt = club_limit_porInt;
          this.club_limit_porExt = club_limit_porExt;
          this.club_limit_mess = club_limit_mess;
     }

}

export default Club;