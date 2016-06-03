import {Page, Platform} from 'ionic-angular';
import {OnInit} from '@angular/core';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 implements OnInit{

  ngOnInit():any {
    this.platform.ready().then(()=>{
      var push = PushNotification.init({ "android": {"senderID": "504253084870"},
        "ios": {"senderID": "504253084870", "gcmSandbox": true, "alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

      push.on('registration', (data) => {
        this.registrationId = data.registrationId;
        alert("registration id=" + data.registrationId);
        alert("data=" + JSON.stringify(data));

        this.data = data;
      });

      push.on('notification', (data) => {
        this.dataList.push(data);
        console.log(data.message);
        alert(JSON.stringify(data));
        this.data = data;
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
  data:any;
  dataText():any {
    return JSON.stringify(this.data);
  }
  constructor(private platform:Platform) {

  }
}
