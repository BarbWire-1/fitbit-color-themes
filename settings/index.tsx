import {themes} from "../common/color/colorThemes";

//create obj, incl each firstColor of theme {color: string, value: number}
const themesFirst = themes.map((theme, index) => ({ color: theme[0], value: index }))
//console.log(JSON.stringify(themes));

console.log(JSON.stringify(themesFirst));

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
  
