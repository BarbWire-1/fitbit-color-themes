import * as messaging from "messaging";
import document  from "document";
import { preferences} from "./shared_preferences";


//COLOR-THEMES
//colors - get theme t per data.value
const themes: string[][] = 
[
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'grey'],
    ['gold', 'limegreen', 'black'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta', 'white'],
];

//export to settings for color dots
let setColors: string[] = [];
for(let i: number = 0; i<themes.length; i++)
{
    setColors[i]= (themes[i][0]);  
};



let prefColor: number = preferences.prefColor ?? 0;

//apply theme-colors per class
function applyColors(theme: number){
    for(let c:number = 0; c<themes[theme].length; c++)
        {
            (document.getElementsByClassName("color" + c) as GraphicsElement[]).forEach((el) =>
            {
                el.style.fill = themes[theme][c];   
            });
        };
        prefColor = theme;
};
applyColors(prefColor);//initial themes[0]

//get themes[t] on evt then call applyColors
messaging.peerSocket.addEventListener("message", (evt) => 
{   
    if (evt?.data?.value && evt.data.key === "ColorTheme") 
    {   
        let t: number = evt.data.value;
        applyColors(t);
        //save t to "settingsTestColor.cbor"
        preferences.prefColor = t;
    };
});
export {applyColors, prefColor,setColors};

