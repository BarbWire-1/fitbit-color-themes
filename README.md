# fitbit-color-themes
common/color/colorThemes.ts:<br>
create array with color themes

resouces/index.view:<br>
all elements wich should have a color of theme need to be class="color+IndexOfColorInTheme" like color0, color1...

app/index.ts:<br>
import {applyColors, prefColor} from "../common/color/applyColors";
applyColors(prefColor);//initial themes[0]

everything else is integrated
