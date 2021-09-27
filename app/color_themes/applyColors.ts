
import * as messaging from "messaging";
import document  from "document";
import {preferences} from "../../common/color_themes/shared_preferences";
import {themes} from "../../common/color_themes/colorThemes";

//if no preferences are stored yet (first load) themes[0]
let prefTheme :number = preferences.prefTheme ?? 0;

//apply theme-colors per class
function applyColors(theme :number) :void
{   
    //here checks for length of current theme, works also, if themes are of different length
    //the elements of classes without color in theme will keep the fill of previous theme!
    for(let c :number = 0; c<themes[theme].length; c++)
    {   
        //elements need to be class="color+indexInTheme" like color0, color1...
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
        preferences.prefTheme = t; //saves t to shared_preferences *.cbor
    }
});
export function initColorThemes () :void
{
    applyColors(prefTheme);
}
//app/index:
//import {initColorThemes} from "./color-themes/applyColors";
//initColorThemes();