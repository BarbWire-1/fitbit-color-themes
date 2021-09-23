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
            settingsKey="ColorTheme"
            
            colors={[
              {color: 'tomato', value: 0},
              {color: 'sandybrown', value: 1},
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
  
 //TODO check this
//   function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
//   }
//   
//   
//   
//  
//   
//   function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       // Correct! Key should be specified inside the array.
//       <ListItem key={number.toString()} value={number} />
//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }
//   
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(JSON.stringify(<NumberList numbers={numbers}/>),
//     );

// function ColorList(props) {
//     const myColors = props.cols;
//     const listItems = cols.map((col) =>
//       // Correct! Key should be specified inside the array.
//       <ListItem key={col} value={col} />
//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }
//   
//   const cols = ['red','blue','green'];
//   console.log(JSON.stringify(<ColorList cols={cols}/>),
//     );
   
