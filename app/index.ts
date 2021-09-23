import * as messaging from "messaging";
import document  from "document";

let myElement = document.getElementById("myElement") as RectElement;

let themes = [
    ['blue', 'red', 'yellow'],
    ['grey', 'white', 'orange']
];

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt && evt.data && evt.data.key === "myColor") {
    myElement.style.fill = themes[evt.data.value][1];
  }
});