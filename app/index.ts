import * as messaging from "messaging";
import document  from "document";

let myElement = document.getElementById("myElement") as RectElement;

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt && evt.data && evt.data.key === "myColor") {
    myElement.style.fill = evt.data.value;
  }
});