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
let setColors:string [] = [];
for(let i: number = 0; i<themes.length; i++)
{
    setColors[i]= (themes[i][0]);  
};
export {themes, setColors};