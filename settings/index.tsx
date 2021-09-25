import {themes} from "../common/color/colorThemes";

let themesFirst = []
let v = 0;
//write an object from themes[v][0](first color of each theme)
themes.forEach((color, value) :void => 
{ 
  themesFirst.push(
  {
    color: themes[v][0], 
    value: v
  }) 
  v++; 
});
//console.log(JSON.stringify(themesFirst));

  function Colors(props) 
  {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
          
            settingsKey="ColorTheme" 
            
            //so color-dots always match first of each color-theme "automatically"
            colors = {themesFirst}
            
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
