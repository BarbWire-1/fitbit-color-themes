import {themes} from "../common/color/colorThemes";

let themesFirst = []
themes.forEach((theme, index) :void => 
{ 
  themesFirst.push(
  {
    color: theme[0],
    value: index
  })
});
//OR - decide later: forEach is more obvios ;)
//themesFirst = themes.map((theme, index) => ({ color: theme[0], value: index }))
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
  
