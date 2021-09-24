import {setColors} from "../common/themes";


  function Colors(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
            settingsKey="ColorTheme"
            
            colors={[
              {color: setColors[0], value: 0},
              {color: setColors[1], value: 1},
              {color: setColors[2], value: 2},
              {color: setColors[3], value: 3},
              {color: setColors[4], value: 4},
              {color: setColors[5], value: 5}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
