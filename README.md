# fitbit-color-themes (work in progress)
common/color/colorThemes.ts:<br>
Create array with color themes

resources/index.view:<br>
All elements which should have a color of theme need to be class="color+IndexOfColorInTheme" like color0, color1...

app/index.ts:<br>
import {initColorThemes} from "../common/color/applyColors";<br>
initColorThemes;<br><br>

Everything else is integrated:

- The latest chosen theme gets written to shared_preferences, so it will start with this on reloading the app<br>
- Every first color of themes will automatically appear as color-dot in settings page<br><br>
(Only short description. It's not complete yet. And sorry, I had some mess with tsconfigs. Will fix that)

Any thoughts, ideas criticism are highly appreciated! :)
--
