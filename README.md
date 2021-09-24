# fitbit-color-themes
common/color/colorThemes.ts:<br>
create array with color themes

resouces/index.view:<br>
all elements wich should have a color of theme need to be class="color+IndexOfColorInTheme" like color0, color1...

app/index.ts:<br>
import {applyColors, prefColor} from "../common/color/applyColors";<br>
applyColors(prefColor);<br>
(Think, this isn't necessary at all, if there is other content in index.ts)

everything else is integrated<br><br>
(Only short description. It's not complete yet)

Any thoughts, ideas criticism are highly appreciated! :)
