
# An example for Push Notification in Ionic V2 with PhoneGap Push Plugin

This is an example to show how to do push notificaition. It is based on

[Apache Cordova / Phonegap Push Notification Tutorial]
(http://phonegappro.com/tutorials/apache-cordova-phonegap-push-notification-tutorial-part-1/)

Sender example: 59094925347 -> get this from your Google Developer 
API Console, project number.


## Command to r

## Troubleshooting

###  Missing Instance Id Issue

On initialize, it returns an error code "MISSING_INSTANCEID_SERVICE",
According to [this doc](https://developers.google.com/instance-id/guides/android-implementation#get_an_instance_id)
it is perhaps because there is no Google Play Service, so you either 
install a Google Play Service on an emulator, or use a real device.


curl --header "Authorization: key=AIzaSyBfM6DjLfcLGAynpjysSjzjl13FlME1lLM" \
--header "Content-Type: application/json" https://android.googleapis.com/gcm/send \
-d "{\"registration_ids\":[\"e-2xJKdaPzc:APA91bFnJh_kuswSizr16i7X08-pnS6qEef1pkvRYEt-9C7Oek1PTf5SlhEUKgA-gdn5lFjE9--Mw3uHU-vZj4EWnQDggVXIpAMNH4Tz-TZuASK9deGuJWdDOiCoJ6DihJJErwAqSJyv\"],\"data\":{\"title\":\"good notification\",\"message\":\"really good\", \"foo\":\"bar\"}}"
