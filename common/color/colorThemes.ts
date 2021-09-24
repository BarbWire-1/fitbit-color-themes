const themes: string[][] = 
[
    ['tomato', 'blue', 'yellow'],
    ['sandybrown', 'white', 'grey'],
    ['gold', 'limegreen', 'black'],
    ['aquamarine', 'turquoise', 'yellow'],
    ['deepskyblue', 'blue', 'red'],
    ['plum', 'magenta', 'white'],
];

let setColors:string [] = [];
for(let i: number = 0; i<themes.length; i++)
{
    setColors[i]= (themes[i][0]);  
};


export {themes, setColors};
//themes to applyColors
//setColors to settings/index => there push to myObject (color, value)
//then colors = {myObject}

//TODO do the loop on themes in settings directly?