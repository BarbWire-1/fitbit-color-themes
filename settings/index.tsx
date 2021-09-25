import {setColors} from "../common/color/colorThemes";


let myColors =[]
let v = 0;
//write an object from setColors array (first of each theme)
setColors.forEach((color, value) => 
{ 
  myColors.push(
  {
    color: setColors[v], 
    value: v
  }) 
  v++; 
});
//console.log(JSON.stringify(myColors));

  function Colors(props) 
  {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
          
            settingsKey="ColorTheme" 
            
            //so color-dots always match first of each color-theme "automatically"
            colors = {myColors}
            
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
