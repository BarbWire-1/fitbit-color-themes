// import { settingsStorage } from 'settings';
// 
// settingsStorage.setItem('myProp', 'Hello, world');
// console.log('Hello, world')

//import { settingsStorage } from "settings";

//ACCESS BY KEY
// Get the value of the setting
//let myKeyValue = settingsStorage.getItem("myKey");


// //OR ACCESS BY INDEX
// // Get the name of the first setting
// let myKeyName = settingsStorage.key(0);
// 
// // Get the value of the first setting
//let myKeyValue = settingsStorage.getItem(0);

// //REMOVE SETTINGS 
// // Remove a setting from storage
// settingsStorage.removeItem("myKey");

//CLEAR SETTINGS
// Clear all settings
//settingsStorage.clear()


// //HANDLING SETTINGS CHANGES
// // Event fires when a setting is changed
// settingsStorage.addEventListener("change", (evt) => {
//   // Which setting changed
//   console.log(`key: ${evt.key}`)
// 
//   // What was the old value
//   console.log(`old value: ${evt.oldValue}`)
// 
//   // What is the new value
//   console.log(`new value: ${evt.newValue}`)
// });
// 
// //LAUNCH
// import { me as companion} from "companion";
// 
// if (companion.launchReasons.settingsChanged) {
//   // Settings were changed while the companion was not running
// }

//EXAMPLE
import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me as companion } from "companion";

let KEY_COLOR = "ColorTheme";

// Settings have been changed
settingsStorage.addEventListener("change", (evt) => {
  sendValue(evt.key, evt.newValue);
});

// Settings were changed while the companion was not running
if (companion.launchReasons.settingsChanged) {
  // Send the value of the setting
  sendValue(KEY_COLOR, settingsStorage.getItem(KEY_COLOR));
  //console.log(sendValue(KEY_COLOR, settingsStorage.getItem(KEY_COLOR)));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}
function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
    //console.log("data.value/New ColorTheme: " + data.value);
  } else {
    console.log("No peerSocket connection");
  }
}