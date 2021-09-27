import {themes} from "../common/color_themes/colorThemes";

//create obj, firstColor of each theme {color: string, value: number}
const themesFirsts = themes.map((theme, index) => ({ color: theme[0], value: index }))
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
            colors = {themesFirsts}
            
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
