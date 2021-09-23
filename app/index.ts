import * as messaging from "messaging";
import document  from "document";



let themes = [
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'orange'],
    ['gold', 'limegreen', 'red'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta', 'white'],
];


messaging.peerSocket.addEventListener("message", (evt) => 
{
    if (evt && evt.data && evt.data.key === "colorTheme") console.log("Theme colors: " + themes[evt.data.value]);
        {
            console.log("Colors of theme: " + themes[evt.data.value]);
            for(let i = 0; i<themes[evt.data.value].length; i++)
            {
                (document.getElementsByClassName("color" + i) as GraphicsElement[]).forEach((el) =>
                {
                console.log("color " + i + ": " + themes[evt.data.value][i]);
                el.style.fill = themes[evt.data.value][i];
                })
            }
        }
    });


