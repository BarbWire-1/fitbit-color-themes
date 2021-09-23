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


let prefs: number;

//apply colors per class
function applyColors(t:number){
    for(let c:number = 0; c<themes[t].length; c++)
        {
            (document.getElementsByClassName("color" + c) as GraphicsElement[]).forEach((el) =>
            {
                el.style.fill = themes[t][c];   
            });
        };
        prefs = t;
};
applyColors(prefs ?? 0);

//get themes[t] on evt then call applyColors
messaging.peerSocket.addEventListener("message", (evt) => 
{   
    if (evt?.data?.value && evt.data.key === "ColorTheme") 
    {   
        let t: number = evt.data.value;
        applyColors(t);
    };
    console.log("prefs: "+ prefs)
});

//TODO add shared preferences to save prefs