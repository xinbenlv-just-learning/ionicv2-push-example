import {Page, Platform} from 'ionic-angular';
import {OnInit} from '@angular/core';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 implements OnInit{

  ngOnInit():any {
    this.platform.ready().then(()=>{
      var push = PushNotification.init({ "android": {"senderID": "504253084870"},
        "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

      push.on('registration', (data) => {
        this.registrationId = data.registrationId;
        alert("registration id=" + data.registrationId);
      });

      push.on('notification', (data) => {
        this.dataList.push(data);
        console.log(data.message);
        alert(JSON.stringify(data));
      });
      push.on('error', (e) => {
        console.log(e.message);
        this.error = e;
        alert(e);
      });
    });
  }

  ken:string= "ken";
  registrationId:string= "no registrationId!";
  dataList:any[] = [];
  error:any;
  constructor(private platform:Platform) {

  }
}
