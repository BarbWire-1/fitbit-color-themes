import {themes} from "../common/color/colorThemes";

let myColors =[]
let v = 0;
//write an object from themes[v][0](first color of each theme)
themes.forEach((color, value) => 
{ 
  myColors.push(
  {
    color: themes[v][0], 
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
  
