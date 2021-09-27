# fitbit-color-themes
## Description:
This code automates the use of color-themes in `fitbit` apps.<br><br>
You only need to define your themes and add a corresponding class to your elements, you want those colors be assigned to.
The last chosen theme gets saved and reused on reload of the app.
The first color of each theme gets written to your app's settings-page.<br><br>
This repo is written in `ts` for `SDK 5.0.2`.<br>
A `javascript` version will follow, or you might adjust the code by removing types.<br><br>

---

## Installation:

- **app:**<br>
Copy the folder `app/color_themes` into your app directory<br><br>
app/index:<br>

```javascript
import {initColorThemes} from "./color_themes/applyColors";
initColorThemes();
```
- **common:**<br>
Copy the folder `common/color_themes` into your common directory.<br>

- **companion:**<br>
Integrate the code in `companion/index.ts` into your index file.<br>

- **settings:**<br>
Integrate the code from `settings/index.tsx` into your index file. <br><br>
*(You can also download a template and start your project from there.)*<br><br>

---
## Usage:
Define your array of color-themes in `common/color_themes/colorThemes.ts` like in the following example:
```javascript
const themes :string[][] = 
[
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'grey'],
    ['gold', 'limegreen', '#000000'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta','white'],
];
```
<br>
To store/restore the last chosen color-theme, it gets written to a *.cbor file in 

`common/color_themes/shared_preferences.js`
. Give this file a unique name.

*(I here took the UUID of my app + _fct.cbor.)*
<br>

```javascript
const FILE_NAME = "f100f76b-0a9e-488f-ba35-d1a8531a2d4b_fct.cbor";
```
<br>

The elements you want to be filled with a color of your themes need to be classed in `resources/index.view` like the following example:
```javascript
<svg>
    <rect id="myElement1" class="color0" width="100%" height="100%" x="0" y="0" />
    <rect id="myElement2" class="color1" width="10%" height="10%" x="100" y="100" />
    <circle class="color2" cx="80%" cy="50%" r="20%"  />
</svg> 
```



<br>
Now having x color-themes, all fills get applied to the elements with 
<p align= "center">`class="color + '0 to x'"`<br>

 automatically.<br>
The first color of each theme gets automatically implied in your app's setting-page - and done.
<br>

---
<br>
Please shout, if you have any issues or suggestions.<br>
<br>
<p align= "center">Play it colorful! 🎨
