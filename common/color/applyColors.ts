//@ts-ignore //these imports are only available in app
import * as messaging from "messaging";
//@ts-ignore
import document  from "document";
import {preferences} from "../shared_preferences";
import {themes} from "./colorThemes";

//if no preferences are stored yet (first load) themes[0]
let prefTheme :number = preferences.prefTheme ?? 0;

//apply theme-colors per class
function applyColors(theme :number) :void
{   
    //here checks for length of current theme, works also, if one color isn't defined
    //TODO perhaps have a fix var for length of themes?
    //wouldn't need to check each loop
    for(let c :number = 0; c<themes[theme].length; c++)
    {   
        //elements need to be class="color+indexInTheme" like color0, color1...
        //@ts-ignore
        (document.getElementsByClassName("color" + c) as GraphicsElement[]).forEach((el) =>
        {
            el.style.fill = themes[theme][c];   
        })
    }
};



//get themes[t] on evt then call applyColors
messaging.peerSocket.addEventListener("message", (evt) => 
{   
    if (evt?.data?.value && evt.data.key === "ColorTheme") 
    {   
        let t :number = evt.data.value;
        applyColors(t);
        //save t to "fitbit_color_themes.cbor"
        preferences.prefTheme = t;
    }
});
export function initColorThemes () :void
{
    applyColors(prefTheme);
}
//export const initColorThemes = applyColors(prefTheme);