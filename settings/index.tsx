
  function Colors(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
            settingsKey="ColorTheme"
            
            colors={[
              {color: "tomato", value: 0},
              {color: "sandybrown", value: 1},
              {color: 'gold', value: 2},
              {color: 'aquamarine', value: 3},
              {color: 'deepskyblue', value: 4},
              {color: 'plum', value: 5}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
