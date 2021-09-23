// registerSettingsPage(({ settings: { myProp } }) => (
//     <Page>
//         <Section title="Settings">{myProp && <Text>{myProp}</Text>}</Section>
//     </Page>
// ));
// function HelloWorld(props) {
//     return (
//       <Page>
//         <Section
//           title={<Text bold align="center">Demo Settings</Text>}>
//           <Toggle
//             settingsKey="toggle"
//             label="Toggle Switch"
//           />
//           <ColorSelect
//             settingsKey="color"
//             colors={[
//               {color: 'tomato'},
//               {color: 'sandybrown'},
//               {color: 'gold'},
//               {color: 'aquamarine'},
//               {color: 'deepskyblue'},
//               {color: 'plum'}
//             ]}
//           />
//         </Section>
//       </Page>
//     );
//   }
//   
//   registerSettingsPage(HelloWorld);


//EXAMPLE
  function Colors(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
            settingsKey="myColor"
            colors={[
              {color: 'tomato'},
              {color: 'sandybrown'},
              {color: 'gold'},
              {color: 'aquamarine'},
              {color: 'deepskyblue'},
              {color: 'plum'}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);