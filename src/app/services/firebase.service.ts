import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db: AngularFirestore, 
  ) { }
  adddata(item:any){
          var dateObj = new Date();
          var month = dateObj.getUTCMonth() + 1; //months from 1-12
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();
          let newdate = day + "/" + month + "/" + year;
          function formatAMPM(date:any) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return [newdate,strTime]
              }
              return this.db.collection('/offlineappdata').add({
                fname:item.fname,
                lname:item.lname,
                createdate:formatAMPM(new Date)[0],
                createtime:formatAMPM(new Date)[1]
             });

  }
  getdata(){
    return this.db.collection('offlineappdata').snapshotChanges();
  }
}
