
# An example for Push Notification

in Ionic V2 with PhoneGap Push Plugin

This is an example to show how to do push notification. It is based on

[Apache Cordova / Phonegap Push Notification Tutorial]
(http://phonegappro.com/tutorials/apache-cordova-phonegap-push-notification-tutorial-part-1/)

Sender example: 59094925347 -> get this from your Google Developer 
API Console, project number.

## Install on IOS

1. Create IOS Provisions Certificate
https://www.pubnub.com/blog/2014-12-22-sending-ios-push-notifications-via-apns-javascript-using-apns-phonegap/

2. Upload certificate to FCM/GCM console

 - Introduction [here](https://firebase.google.com/docs/cloud-messaging/ios/client#set_up_the_sdk)
 - Do it from the portal [here]
(https://developers.google.com/mobile/add?platform=ios&cntapi=gcm&cnturl=https:%2F%2Fdevelopers.google.com%2Fcloud-messaging%2Fios%2Fclient&cntlbl=Continue%20Adding%20GCM%20Support&%3Fconfigured%3Dtrue)

3. Install in Ionic: put in cordova project
https://github.com/phonegap/phonegap-plugin-push/issues/440

> Yes, you need to drag and drop it into your cordova project. I usually put it into
> myproject/platforms/ios/myproject folder.
> Then open Xcode by double clicking .xcworkspace.
> in Xcode Project Build Phases
> --> Copy Bundle Resources click + and
> --> Add other
> --> select GoogleServiceInfo.plist
> in Xcode Build Settings (only if build error: Undefined symbols for architecture arm64:)
> --> Linking
> --> Other Linker Flags
> --> Debug
> --> add $(inherited)
> From here on the project should build in Xcode.
> If you get a build error in Codova CLI such as error: Ld build/device/YourProject.app/YourProject normal armv7 
checkout my solution at #456


## Command to send a request

```bash
curl --header "Authorization: key=AIzaSyBfM6DjLfcLGAynpjysSjzjl13FlME1lLM" \
--header "Content-Type: application/json" https://android.googleapis.com/gcm/send \
-d "{\"registration_ids\":[\"e-2xJKdaPzc:APA91bFnJh_kuswSizr16i7X08-pnS6qEef1pkvRYEt-9C7Oek1PTf5SlhEUKgA-gdn5lFjE9--Mw3uHU-vZj4EWnQDggVXIpAMNH4Tz-TZuASK9deGuJWdDOiCoJ6DihJJErwAqSJyv\"],\"data\":{\"title\":\"good notification\",\"message\":\"really good\", \"foo\":\"bar\"}}"


curl --header "Authorization: key=AIzaSyBfM6DjLfcLGAynpjysSjzjl13FlME1lLM" \
--header "Content-Type: application/json" https://fcm.googleapis.com/fcm/send \
-d "{\"registration_ids\":[\"eEwND7V-RzU:APA91bGtWdvAsfKCnsD8aqpmeu-POUER6TgK6FUNEX24-Ext-RNvhaT6fNWz_s-ACSh1_Glt33AVDgFp1EUrDX3-7bU60FYQNECFMZEq_xOBrMMFkB4Y_cGS-c2YTn__bC1QhYjMjXKO\"],\"notification\":{\"title\":\"good notification7 body\",\"body\":\"really good\"}}"

curl --header "Authorization: key=AIzaSyBfM6DjLfcLGAynpjysSjzjl13FlME1lLM" \
--header "Content-Type: application/json" https://gcm-http.googleapis.com/gcm/send \
-d "{\"registration_ids\":[\"eEwND7V-RzU:APA91bGtWdvAsfKCnsD8aqpmeu-POUER6TgK6FUNEX24-Ext-RNvhaT6fNWz_s-ACSh1_Glt33AVDgFp1EUrDX3-7bU60FYQNECFMZEq_xOBrMMFkB4Y_cGS-c2YTn__bC1QhYjMjXKO\"],\"notification\":{\"title\":\"good notification 8 body gcm\",\"body\":\"really good\"}}"


```

   aps =     {
        alert = "test ios messaging";
    };
    
## Troubleshooting

###  Missing Instance Id Issue

On initialize, it returns an error code "MISSING_INSTANCEID_SERVICE",
According to [this doc](https://developers.google.com/instance-id/guides/android-implementation#get_an_instance_id)
it is perhaps because there is no Google Play Service, so you either 
install a Google Play Service on an emulator, or use a real device.



## References
