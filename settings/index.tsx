import {setColors} from "../common/colorThemes";
let dots = setColors;

  function Colors(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
            settingsKey="ColorTheme"
            
            colors={[
              {color: dots[0], value: 0},
              {color: dots[1], value: 1},
              {color: dots[2], value: 2},
              {color: dots[3], value: 3},
              {color: dots[4], value: 4},
              {color: dots[5], value: 5}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
