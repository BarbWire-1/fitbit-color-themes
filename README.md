# fitbit-color-themes (work in progress)
common/color/colorThemes.ts:<br>
Create array with color themes

resouces/index.view:<br>
All elements wich should have a color of theme need to be class="color+IndexOfColorInTheme" like color0, color1...

app/index.ts:<br>
Import {initColorThemes} from "../common/color/applyColors";<br>
<initColorThemes>;<br>

Everything else is integrated<br><br>

The latest chosen theme gets written to shared_preferences, so it will start with this on reloading the app<br>
(Only short description. It's not complete yet. And sorry, I had some mess with tsconfigs. Will fix that)

Any thoughts, ideas criticism are highly appreciated! :)
--
