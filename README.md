# fitbit-color-themes (work in progress)
common/color/colorThemes.ts:<br>
create array with color themes

resouces/index.view:<br>
all elements wich should have a color of theme need to be class="color+IndexOfColorInTheme" like color0, color1...

app/index.ts:<br>
import {applyColors, prefTheme} from "../common/color/applyColors";<br>
applyColors(prefTheme);<br>

everything else is integrated<br><br>

- the latest chosen theme gets written to shared_preferences, so it will start with this on reloading the app<br>
- every first color of themes will automatically appear as color-dot in wettings page<br>
(Only short description. It's not complete yet. And sorry, I had some mess with tsconfigs. Will fix that)

Any thoughts, ideas criticism are highly appreciated! :)
--
