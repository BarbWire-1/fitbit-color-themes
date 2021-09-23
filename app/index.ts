import * as messaging from "messaging";
import document  from "document";


//COLOR-THEMES
//themes
let themes = [
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'grey'],
    ['gold', 'limegreen', 'black'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta', 'white'],
];


messaging.peerSocket.addEventListener("message", (evt) => 
{   
    //evt.data.key here colorThemes (colors []), evt.data.value here the index of chosen theme
    // in settings/index.tsx as item of colors like {color: 'colorShows', value: 0},
    if (evt?.data?.value && evt.data.key === "ColorTheme") 
    {   
        let t: number = evt.data.value;// index of theme
        // console.log("evt.data: " + JSON.stringify(evt.data));
        // console.log("evt.data.key: "+ evt.data.key)
        // console.log("evt.data.value: " + evt.data.value);
        // console.log("themes[evt.data.value]: " + themes[evt.data.value]);
        //Iterate through number of colors per theme 
        //and assign color [c] per className where className = color+c
        for(let c:number = 0; c<themes[t].length; c++)
        {
            //console.log("themes[evt.data.value].length: " + themes[t].length);
            (document.getElementsByClassName("color" + c) as GraphicsElement[]).forEach((el) =>
            {
                //console.log("themes[evt.data.value][" + i + "]: " + themes[evt.data.value][i]);
                el.style.fill = themes[t][c];
            })
        }
    }
});

//TODO evtl. diff structure needed to save settings?


