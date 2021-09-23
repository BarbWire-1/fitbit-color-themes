import * as messaging from "messaging";
import document  from "document";


//COLOR-THEMES
//colors - get theme t per data.value
let themes: string[][] = 
[
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'grey'],
    ['gold', 'limegreen', 'black'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta', 'white'],
];

//TODO on install: theme = themes[prefs] ?? themes[0]
//then remove in css

//apply color/fill on evt per class: themes[t][c]
messaging.peerSocket.addEventListener("message", (evt) => 
{   
    if (evt?.data?.value && evt.data.key === "ColorTheme") 
    {   
        let t: number = evt.data.value;
        for(let c:number = 0; c<themes[t].length; c++)
        {
            (document.getElementsByClassName("color" + c) as GraphicsElement[]).forEach((el) =>
            {
                el.style.fill = themes[t][c];   
            });
        };
        console.log("themes[t]: " + themes[t]);//write this to preferences
        let preferences = themes[t];
        console.log("preferences: " + themes[t]);
    };
});

//TODO evtl. diff structure needed to save settings?