
class Users {
    //  coa_id;cp
    //  cpcoa_nombre;
    //  cpcoa_pais;

     constructor(userid , userName , mail ,password,userPhone,birthdate,roleid ,companyid){
         this.userid = userid;
         this.userName = userName;
         this.mail = mail;
         this.password = password;
         this.userPhone = userPhone;
         this.birthdate = birthdate;
         this.roleid = roleid;
         this.companyid = companyid;
     }

}
export default Users;