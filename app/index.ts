import * as messaging from "messaging";
import document  from "document";


//COLOR-THEMES
//themes
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
    //evt.data.key here colorThemes (colors []), evt.data.value here the index of chosen theme
    // in settings/index.tsx as item of colors like {color: 'colorShows', value: 0},
    if (evt && evt.data && evt.data.key === "colorTheme") console.log("Theme colors: " + themes[evt.data.value]);
        {
            console.log("Colors of theme: " + themes[evt.data.value]);
            //Iterate through number of colors per theme 
            //and assign color [i] per className where className = color+i
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


